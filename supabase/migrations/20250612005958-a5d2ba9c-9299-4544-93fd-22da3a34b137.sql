
-- Update the existing admin record to use the current user_id
UPDATE public.admin_users 
SET user_id = '0ad8d309-de80-4a92-8df7-48193ae2002e'
WHERE email = 'brian+admin1@pureconcepts.com';
