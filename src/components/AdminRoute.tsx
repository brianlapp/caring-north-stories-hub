
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { ShieldX, Settings } from 'lucide-react';

interface AdminRouteProps {
  children: React.ReactNode;
}

export default function AdminRoute({ children }: AdminRouteProps) {
  const { user, isAdmin, loading, setupManualAdmin } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <ShieldX className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-muted-foreground mb-6">
            You don't have administrator access to this area. Only verified administrators can access the blog management system.
          </p>
          <div className="space-y-4">
            <Button onClick={setupManualAdmin} className="w-full">
              <Settings className="w-4 h-4 mr-2" />
              Set Up as First Admin
            </Button>
            <Button variant="outline" asChild className="w-full">
              <a href="/">Return to Home</a>
            </Button>
            <p className="text-sm text-muted-foreground">
              If you're the first user, click "Set Up as First Admin". Otherwise, contact the site administrator to request access.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
