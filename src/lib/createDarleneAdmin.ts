
import { supabase } from '@/integrations/supabase/client';

export const createDarleneAdmin = async () => {
  try {
    const { data, error } = await supabase.functions.invoke('create-admin-user', {
      body: {
        email: 'collin.darlene@gmail.com',
        password: 'CompassionNG',
        name: 'Darlene Collin',
        role: 'admin'
      }
    });

    if (error) throw error;
    
    console.log('Darlene admin user created:', data);
    return data;
  } catch (error) {
    console.error('Error creating Darlene admin:', error);
    throw error;
  }
};
