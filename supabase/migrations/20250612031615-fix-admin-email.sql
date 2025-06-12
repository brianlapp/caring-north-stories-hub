
-- Update the admin user email to match the actual login email
UPDATE public.admin_users 
SET email = 'brian@pureconcepts.com'
WHERE email = 'brian+admin1@pureconcepts.com' 
AND user_id = '0ad8d309-de80-4a92-8df7-48193ae2002e';
