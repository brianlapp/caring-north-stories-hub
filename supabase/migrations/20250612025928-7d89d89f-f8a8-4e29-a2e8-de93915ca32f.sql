
-- Add Darlene to admin_users table
-- First, let's find her user_id from auth.users and insert into admin_users
INSERT INTO public.admin_users (user_id, email, name, role)
SELECT 
    id as user_id,
    'collin.darlene@gmail.com' as email,
    'Darlene Collins' as name,
    'admin' as role
FROM auth.users 
WHERE email = 'collin.darlene@gmail.com'
AND NOT EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE email = 'collin.darlene@gmail.com'
);
