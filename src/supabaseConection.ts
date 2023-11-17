
import { createClient } from '@supabase/supabase-js'
import dotenv from "dotenv"
dotenv.config();

const supabaseUrl = 'https://tkwxgpzvbqiqwtvsxrll.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrd3hncHp2YnFpcXd0dnN4cmxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcyMjExMjIsImV4cCI6MjAxMjc5NzEyMn0.MlRXdglIhgohpa7ULcXoAjOzyEY_OgY_0zHsCXN0Geg'


const supabase = createClient (supabaseUrl, supabaseKey, {
    auth: {
        persistSession: false
    }
})


export { supabase }