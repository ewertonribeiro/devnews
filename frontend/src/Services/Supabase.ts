import{createClient} from '@supabase/supabase-js';


const options = {
    schema: 'public',
    autoRefreshToken: true,
    persistSession: true,
   detectSessionInUrl: true
 }



export const supabase = createClient('https://hjrymdtglabcppmcyfsk.supabase.co' , 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTY4NzkxMSwiZXhwIjoxOTU1MjYzOTExfQ.zDOp9ifGcp1A09rwO-QeWU3T6q4xKtN5AUw-F4BaEkA'
,options);

