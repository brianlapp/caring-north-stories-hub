
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface CreateAdminUserRequest {
  email: string;
  password: string;
  name: string;
  role?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      throw new Error('Missing authorization header');
    }

    // Create admin client for user creation
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    );

    // Create regular client for checking current user permissions
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: authHeader },
        },
      }
    );

    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) {
      throw new Error('Unauthorized');
    }

    // Check if current user is an admin
    const { data: adminUser, error: adminError } = await supabase
      .from('admin_users')
      .select('*')
      .eq('user_id', user.id)
      .maybeSingle();

    if (adminError || !adminUser) {
      throw new Error('Access denied: Admin privileges required');
    }

    const { email, password, name, role = 'editor' }: CreateAdminUserRequest = await req.json();

    console.log('Creating admin user:', { email, name, role });

    // Try to create the user account first
    const { data: newUser, error: createError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      user_metadata: { name },
      email_confirm: true, // Auto-confirm email
    });

    // If user creation fails due to existing email
    if (createError && createError.message.includes('already been registered')) {
      console.log('User already exists, checking admin status...');
      
      // Find existing user by email in admin_users table
      const { data: existingAdmin, error: adminCheckError } = await supabaseAdmin
        .from('admin_users')
        .select('*')
        .eq('email', email)
        .maybeSingle();

      if (adminCheckError) {
        console.error('Error checking existing admin:', adminCheckError);
        throw new Error('Failed to check existing admin status');
      }

      if (existingAdmin) {
        return new Response(
          JSON.stringify({
            error: `User ${email} already has admin privileges with role: ${existingAdmin.role}`
          }),
          {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders,
            },
          }
        );
      }

      // User exists in auth but not in admin_users, let's find their user_id and grant admin privileges
      console.log('User exists in auth but not in admin_users, granting admin privileges...');
      
      // Use a SQL query to find the user ID and insert admin record in one operation
      const { data: adminRecord, error: grantError } = await supabaseAdmin
        .rpc('grant_admin_to_existing_user', {
          user_email: email,
          user_name: name,
          user_role: role
        });

      if (grantError) {
        console.error('Error granting admin to existing user:', grantError);
        
        // Fallback: try direct insert with a subquery
        const { data: insertResult, error: insertError } = await supabaseAdmin
          .from('admin_users')
          .insert({
            user_id: `(SELECT id FROM auth.users WHERE email = '${email}')`,
            email: email,
            name: name,
            role: role,
          })
          .select()
          .single();

        if (insertError) {
          console.error('Fallback insert also failed:', insertError);
          throw new Error(`Cannot grant admin privileges to existing user ${email}. Please contact support.`);
        }

        return new Response(
          JSON.stringify({
            success: true,
            message: 'Admin privileges granted to existing user',
            user: insertResult,
          }),
          {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders,
            },
          }
        );
      }

      return new Response(
        JSON.stringify({
          success: true,
          message: 'Admin privileges granted to existing user',
          user: adminRecord,
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    // If there's another error during user creation, throw it
    if (createError) {
      console.error('Error creating user:', createError);
      throw new Error(`Failed to create user: ${createError.message}`);
    }

    if (!newUser.user) {
      throw new Error('User creation failed');
    }

    console.log('User created successfully:', newUser.user.id);

    // Add admin privileges
    const { data: adminRecord, error: adminInsertError } = await supabaseAdmin
      .from('admin_users')
      .insert({
        user_id: newUser.user.id,
        email: email,
        name: name,
        role: role,
      })
      .select()
      .single();

    if (adminInsertError) {
      console.error('Error creating admin record:', adminInsertError);
      // Try to clean up the user if admin record creation fails
      await supabaseAdmin.auth.admin.deleteUser(newUser.user.id);
      throw new Error(`Failed to create admin record: ${adminInsertError.message}`);
    }

    console.log('Admin user created successfully:', adminRecord);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Admin user created successfully',
        user: {
          id: newUser.user.id,
          email: adminRecord.email,
          name: adminRecord.name,
          role: adminRecord.role,
        },
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error('Error in create-admin-user function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Internal server error' 
      }),
      {
        status: 400,
        headers: { 
          'Content-Type': 'application/json', 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
