import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gfqtiyerxokhzphipwol.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmcXRpeWVyeG9raHpwaGlwd29sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxODAyMDIsImV4cCI6MTk5Mjc1NjIwMn0.alAkzpLowudYYCCKo2bMnx4I6haRXDFiPtGmQL5KpcI'

export const supabase = createClient(supabaseUrl, supabaseKey)

console.log('Conexion a supabase', supabase)