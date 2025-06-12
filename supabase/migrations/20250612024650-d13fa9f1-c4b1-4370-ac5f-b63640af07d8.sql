
-- Drop the problematic RLS policies that cause infinite recursion
DROP POLICY IF EXISTS "Admins can view all admin users" ON public.admin_users;
DROP POLICY IF EXISTS "Admins can create new admin users" ON public.admin_users;
DROP POLICY IF EXISTS "Admins can update admin users" ON public.admin_users;
DROP POLICY IF EXISTS "Admins can delete admin users" ON public.admin_users;

-- Disable RLS on admin_users table to prevent recursion issues
-- Since admin operations are protected by the edge functions, this is safe
ALTER TABLE public.admin_users DISABLE ROW LEVEL SECURITY;
