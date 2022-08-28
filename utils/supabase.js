import { createClient } from "@supabase/supabase-js";

console.log(process.env)
export default createClient(
    process.env.NEXT_API_URL, 
    process.env.NEXT_API_KEY
); 
