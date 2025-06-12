
import { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isAdmin: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string, name: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  setupManualAdmin: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const checkAdminStatus = async (userId: string) => {
    console.log('Checking admin status for user:', userId);
    try {
      const { data: adminUser, error } = await supabase
        .from('admin_users')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();
      
      console.log('Admin check result:', { adminUser, error });
      
      if (error && error.code !== 'PGRST116') {
        console.log('Admin check error:', error.message);
        setIsAdmin(false);
        return false;
      }
      
      const adminStatus = !!adminUser;
      setIsAdmin(adminStatus);
      console.log('Is admin:', adminStatus);
      return adminStatus;
    } catch (error) {
      console.error('Error checking admin status:', error);
      setIsAdmin(false);
      return false;
    }
  };

  const setupFirstAdmin = async (session: Session) => {
    console.log('Attempting to setup first admin for:', session.user.email);
    try {
      const { data, error } = await supabase.functions.invoke('setup-first-admin', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      console.log('Setup first admin response:', { data, error });

      if (error) {
        console.error('Error in setup-first-admin:', error);
        return false;
      }

      if (data?.isFirstAdmin) {
        console.log('User set up as first admin!');
        toast({
          title: "Welcome, Admin!",
          description: "You've been set up as the first administrator.",
        });
        setIsAdmin(true);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Error calling setup-first-admin function:', error);
      return false;
    }
  };

  const setupManualAdmin = async () => {
    if (!session) {
      toast({
        title: "Not Authenticated",
        description: "Please sign in first.",
        variant: "destructive",
      });
      return;
    }

    console.log('Manual admin setup requested for:', session.user.email);
    
    try {
      // Check if there are any existing admins
      const { data: existingAdmins, error: checkError } = await supabase
        .from('admin_users')
        .select('id')
        .limit(1);

      if (checkError) {
        console.error('Error checking existing admins:', checkError);
        toast({
          title: "Setup Error",
          description: "Failed to check existing admin users.",
          variant: "destructive",
        });
        return;
      }

      // If no admins exist, call the edge function
      if (!existingAdmins || existingAdmins.length === 0) {
        const success = await setupFirstAdmin(session);
        if (success) {
          await checkAdminStatus(session.user.id);
        }
      } else {
        toast({
          title: "Admin Already Exists",
          description: "An administrator has already been set up for this system.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error in manual admin setup:', error);
      toast({
        title: "Setup Failed",
        description: "Manual admin setup failed. Please contact support.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    let mounted = true;

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Auth event:', event, session?.user?.email);
        
        if (!mounted) return;
        
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          console.log('User is authenticated, checking admin status...');
          // Only check admin status for authenticated users
          setTimeout(() => {
            if (mounted) {
              checkAdminStatus(session.user.id);
            }
          }, 0);
        } else {
          console.log('No user session, setting admin to false');
          setIsAdmin(false);
        }
        
        console.log('Setting loading to false');
        if (mounted) {
          setLoading(false);
        }
      }
    );

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!mounted) return;
      
      console.log('Initial session check:', session?.user?.email);
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        console.log('Initial session has user, checking admin status...');
        setTimeout(() => {
          if (mounted) {
            checkAdminStatus(session.user.id);
          }
        }, 0);
      }
      
      console.log('Initial session check complete, setting loading to false');
      if (mounted) {
        setLoading(false);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [toast]);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { error };
  };

  const signUp = async (email: string, password: string, name: string) => {
    const redirectUrl = `${window.location.origin}/auth?type=signup`;
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          name: name,
        }
      }
    });
    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
    });
  };

  const value = {
    user,
    session,
    isAdmin,
    loading,
    signIn,
    signUp,
    signOut,
    setupManualAdmin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
