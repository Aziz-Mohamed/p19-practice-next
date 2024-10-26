import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    console.log({"error is in private" : error , "data is in private": data })
    
    redirect('/login')
  }

  return <p>Hello {data.user.email}</p>
}