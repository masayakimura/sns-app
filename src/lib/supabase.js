import { createClient } from "@supabase/supabase-js";

// 一時的に直接値を設定
const supabaseUrl = "https://cajyzyxylsjgchrwwnye.supabase.co";
const supabaseApiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhanl6eXh5bHNqZ2Nocnd3bnllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MDg1NjIsImV4cCI6MjA2NDA4NDU2Mn0.LVDGfhidlvL8Rz2cfXst1RH9cdmgcD5T4mqPUSkdiCo";

export const supabase = createClient(supabaseUrl, supabaseApiKey);