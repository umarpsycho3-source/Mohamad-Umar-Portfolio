import { Plus, Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { deleteProject } from "./actions";

export default async function AdminProjects() {
  const supabase = await createClient();
  const { data: projects } = await supabase.from('projects').select('*').order('created_at', { ascending: false });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Manage Projects</h1>
        <Link href="/admin/projects/new" className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Plus size={20} /> Add New Project
        </Link>
      </div>

      <div className="glass rounded-2xl border border-foreground/5 bg-background/50 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-foreground/10 bg-foreground/5">
              <th className="p-4 font-semibold text-foreground/80">Project Image</th>
              <th className="p-4 font-semibold text-foreground/80">Title</th>
              <th className="p-4 font-semibold text-foreground/80">Tags</th>
              <th className="p-4 font-semibold text-foreground/80 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {!projects || projects.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-foreground/60">
                  No projects found. Once connected to Supabase, your projects will appear here.
                </td>
              </tr>
            ) : (
              projects.map((project) => (
                <tr key={project.id} className="border-b border-foreground/5 hover:bg-foreground/5 transition-colors">
                  <td className="p-4">
                    <img src={project.image_url || "https://images.unsplash.com/photo-1557821552-17105176677c?w=150&q=80"} alt={project.title} className="w-16 h-12 object-cover rounded-lg" />
                  </td>
                  <td className="p-4 font-medium">{project.title}</td>
                  <td className="p-4">
                    <div className="flex gap-1 flex-wrap">
                      {project.tags?.map((tag: string) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-sm bg-foreground/10">{tag}</span>
                      ))}
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Link href={`/admin/projects/edit/${project.id}`} className="text-primary hover:bg-primary/10 p-2 rounded-lg transition-colors inline-flex">
                        <Edit size={18} />
                      </Link>
                      <form action={deleteProject}>
                        <input type="hidden" name="id" value={project.id} />
                        <button type="submit" className="text-red-500 hover:bg-red-500/10 p-2 rounded-lg transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
