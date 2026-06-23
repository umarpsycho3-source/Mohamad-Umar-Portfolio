'use client'

import { addProject } from "../actions"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

export default function NewProject() {
  const router = useRouter()

  const handleSubmit = async (formData: FormData) => {
    try {
      await addProject(formData)
      toast.success("Project added successfully!", {
        style: { background: '#111', color: '#fff', border: '1px solid #333' }
      })
      router.push("/admin/projects")
    } catch (e) {
      toast.error("Failed to add project")
    }
  }

  return (
    <div className="space-y-8 max-w-3xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/projects" className="p-2 rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-colors">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-3xl font-bold">Add New Project</h1>
      </div>

      <form action={handleSubmit} className="glass p-8 rounded-2xl border border-foreground/5 bg-background/50 space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground/80">Project Title *</label>
          <input 
            name="title" 
            required 
            className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
            placeholder="e.g. E-Commerce Dashboard"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground/80">Description *</label>
          <textarea 
            name="description" 
            required 
            rows={4}
            className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
            placeholder="Describe your project..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground/80">Image URL</label>
          <input 
            name="image_url" 
            type="url"
            className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
            placeholder="https://images.unsplash.com/..."
          />
          <p className="text-xs text-foreground/50">For now, provide a direct URL to an image. Later you can set up storage uploads.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/80">Live Demo URL</label>
            <input 
              name="live_url" 
              type="url"
              className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
              placeholder="https://yourproject.com"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/80">GitHub URL</label>
            <input 
              name="github_url" 
              type="url"
              className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
              placeholder="https://github.com/..."
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground/80">Tags (comma separated)</label>
          <input 
            name="tags" 
            className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
            placeholder="React, Next.js, Tailwind CSS"
          />
        </div>

        <div className="flex items-center gap-3 py-2">
          <input 
            type="checkbox" 
            id="is_featured" 
            name="is_featured" 
            value="true"
            className="w-5 h-5 rounded border-foreground/20 text-primary focus:ring-primary/50 bg-foreground/5"
          />
          <label htmlFor="is_featured" className="text-sm font-medium text-foreground/80 cursor-pointer">
            Feature this project on the Home page
          </label>
        </div>

        <div className="pt-4">
          <button type="submit" className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 w-full hover:opacity-90 transition-opacity">
            <Save size={20} /> Save Project
          </button>
        </div>
      </form>
    </div>
  )
}
