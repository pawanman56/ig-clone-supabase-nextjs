import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    'https://dilmcretjawugrrjnihh.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpbG1jcmV0amF3dWdycmpuaWhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5MzU0MjgsImV4cCI6MjAwMDUxMTQyOH0.qSdrFynA5-6W-PFNVV0kuh5pqWt96OZNHXVN2qTHSug'
);