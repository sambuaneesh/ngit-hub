import { createClient } from "@supabase/supabase-js";
import { VITE_SUPABASE_ANON_KEY, VITE_SUPABASE_URL } from "./configs";
const supabaseUrl = VITE_SUPABASE_URL;
const supabaseAnonKey = VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
