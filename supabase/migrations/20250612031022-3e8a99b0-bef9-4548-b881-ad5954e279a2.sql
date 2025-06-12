
-- First, let's see what policies already exist and drop them to start fresh
DROP POLICY IF EXISTS "Admins can view admin users" ON public.admin_users;
DROP POLICY IF EXISTS "Admins can create admin users" ON public.admin_users;
DROP POLICY IF EXISTS "Admins can update admin users" ON public.admin_users;
DROP POLICY IF EXISTS "Admins can delete other admin users" ON public.admin_users;

-- Create comprehensive RLS policies for admin_users table

-- Policy to allow existing admins to view admin users
CREATE POLICY "Admins can view admin users" ON public.admin_users
  FOR SELECT 
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE user_id = auth.uid()
    )
  );

-- Policy to allow existing admins to create new admin users
CREATE POLICY "Admins can create admin users" ON public.admin_users
  FOR INSERT 
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE user_id = auth.uid()
    )
  );

-- Policy to allow admins to update admin users (but not their own role)
CREATE POLICY "Admins can update admin users" ON public.admin_users
  FOR UPDATE 
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE user_id = auth.uid()
    )
    AND (
      -- Prevent admins from changing their own role
      user_id != auth.uid() OR 
      role = (SELECT role FROM public.admin_users WHERE user_id = auth.uid())
    )
  );

-- Policy to allow admins to delete other admin users (but not themselves)
CREATE POLICY "Admins can delete other admin users" ON public.admin_users
  FOR DELETE 
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE user_id = auth.uid()
    )
    AND user_id != auth.uid() -- Prevent self-deletion
  );

-- Ensure RLS is enabled on admin_users table
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
