'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function deleteProject(formData: FormData) {
  const id = formData.get('id') as string
  if (!id) return

  const supabase = await createClient()
  await supabase.from('projects').delete().eq('id', id)

  revalidatePath('/admin/projects')
  revalidatePath('/projects')
}

export async function addProject(formData: FormData) {
  const supabase = await createClient()

  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const image_url = formData.get('image_url') as string
  const github_url = formData.get('github_url') as string
  const live_url = formData.get('live_url') as string
  const tagsString = formData.get('tags') as string
  const is_featured = formData.get('is_featured') === 'true'
  
  const tags = tagsString ? tagsString.split(',').map(t => t.trim()) : []

  const { error } = await supabase.from('projects').insert([
    {
      title,
      description,
      image_url,
      github_url,
      live_url,
      tags,
      is_featured
    }
  ])

  if (error) {
    console.error("Supabase insert error:", error);
    throw new Error(error.message);
  }

  revalidatePath('/admin/projects')
  revalidatePath('/projects')
}

export async function updateProject(formData: FormData) {
  const supabase = await createClient()

  const id = formData.get('id') as string
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const image_url = formData.get('image_url') as string
  const github_url = formData.get('github_url') as string
  const live_url = formData.get('live_url') as string
  const tagsString = formData.get('tags') as string
  const is_featured = formData.get('is_featured') === 'true'
  
  const tags = tagsString ? tagsString.split(',').map(t => t.trim()) : []

  const { error } = await supabase.from('projects').update({
    title,
    description,
    image_url,
    github_url,
    live_url,
    tags,
    is_featured
  }).eq('id', id)

  if (error) {
    console.error("Supabase update error:", error);
    throw new Error(error.message);
  }

  revalidatePath('/admin/projects')
  revalidatePath('/projects')
}
