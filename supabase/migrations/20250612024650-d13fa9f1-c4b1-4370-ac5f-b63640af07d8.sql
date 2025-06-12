
-- Create a new edge function for creating admin users
-- This will be handled by the edge function creation, but we need to ensure proper RLS policies

-- Add RLS policies for admin_users table to allow admins to manage other admin users
CREATE POLICY "Admins can view all admin users" 
  ON public.admin_users 
  FOR SELECT 
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can create new admin users" 
  ON public.admin_users 
  FOR INSERT 
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can update admin users" 
  ON public.admin_users 
  FOR UPDATE 
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can delete admin users" 
  ON public.admin_users 
  FOR DELETE 
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE user_id = auth.uid()
    )
  );
