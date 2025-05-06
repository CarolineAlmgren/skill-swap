// src/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

// Ersätt med din egen URL och public key från Supabase dashboard
const supabaseUrl = "https://xulswvjzhhnxnjdjazla.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1bHN3dmp6aGhueG5qZGphemxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NjE2NjAsImV4cCI6MjA1ODMzNzY2MH0.oTwFEuVla7mQN0AJSkF1wJYr2jfoThoYSSfGaIi2h90";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
