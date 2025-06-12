
-- Drop the problematic recursive policies
DROP POLICY IF EXISTS "Admins can view admin users" ON public.admin_users;
DROP POLICY IF EXISTS "Admins can create admin users" ON public.admin_users; 
DROP POLICY IF EXISTS "Admins can update admin users" ON public.admin_users;
DROP POLICY IF EXISTS "Admins can delete other admin users" ON public.admin_users;

-- Create non-recursive policies that use a security definer function
-- First, create a security definer function to check admin status
CREATE OR REPLACE FUNCTION public.is_admin_user(check_user_id uuid)
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = check_user_id
  );
$$;

-- Now create policies that don't cause recursion
CREATE POLICY "Allow admin users to view admin_users" ON public.admin_users
  FOR SELECT 
  USING (public.is_admin_user(auth.uid()));

CREATE POLICY "Allow admin users to insert admin_users" ON public.admin_users
  FOR INSERT 
  WITH CHECK (public.is_admin_user(auth.uid()));

CREATE POLICY "Allow admin users to update admin_users" ON public.admin_users
  FOR UPDATE 
  USING (public.is_admin_user(auth.uid()))
  WITH CHECK (public.is_admin_user(auth.uid()));

CREATE POLICY "Allow admin users to delete admin_users" ON public.admin_users
  FOR DELETE 
  USING (public.is_admin_user(auth.uid()) AND user_id != auth.uid());

-- Update other tables' policies to use the same function
DROP POLICY IF EXISTS "Admins can manage categories" ON public.categories;
DROP POLICY IF EXISTS "Admins can manage posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Admins can manage media" ON public.media_uploads;

CREATE POLICY "Admins can manage categories" ON public.categories 
  FOR ALL USING (public.is_admin_user(auth.uid()));

CREATE POLICY "Admins can manage posts" ON public.blog_posts 
  FOR ALL USING (public.is_admin_user(auth.uid()));

CREATE POLICY "Admins can manage media" ON public.media_uploads 
  FOR ALL USING (public.is_admin_user(auth.uid()));
