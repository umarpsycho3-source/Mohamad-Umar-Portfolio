'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function deleteMessage(formData: FormData) {
  const id = formData.get('id') as string
  if (!id) return

  const supabase = await createClient()
  await supabase.from('messages').delete().eq('id', id)

  revalidatePath('/admin/messages')
}
