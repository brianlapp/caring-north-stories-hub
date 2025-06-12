
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const authHeader = req.headers.get('Authorization')!;
    const token = authHeader.replace('Bearer ', '');
    
    // Verify the user's JWT token
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser(token);
    
    if (userError || !user) {
      throw new Error('Unauthorized');
    }

    console.log('User attempting admin setup:', user.email, user.user_metadata);

    // Check if there are any existing admin users
    const { data: existingAdmins, error: adminCheckError } = await supabaseClient
      .from('admin_users')
      .select('id')
      .limit(1);

    if (adminCheckError) {
      console.error('Error checking existing admins:', adminCheckError);
      throw adminCheckError;
    }

    // If no admin users exist, make this user the first admin
    if (!existingAdmins || existingAdmins.length === 0) {
      // Get the user's name from metadata, fallback to email if not available
      const userName = user.user_metadata?.name || user.user_metadata?.full_name || user.email?.split('@')[0] || 'Admin User';
      
      const { error: insertError } = await supabaseClient
        .from('admin_users')
        .insert([
          {
            user_id: user.id,
            email: user.email,
            name: userName,
            created_at: new Date().toISOString()
          }
        ]);

      if (insertError) {
        console.error('Error inserting admin user:', insertError);
        throw insertError;
      }

      console.log(`First admin user created: ${user.email} (${userName})`);
      
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'First admin user created successfully',
          isFirstAdmin: true 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200 
        }
      );
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'User authenticated',
        isFirstAdmin: false 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error in setup-first-admin function:', error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      }
    );
  }
});
