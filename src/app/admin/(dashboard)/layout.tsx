import Link from "next/link";
import { LayoutDashboard, FolderKanban, Mail, LogOut, Home } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-foreground/5 bg-background/50 glass flex flex-col">
        <div className="h-20 flex items-center px-8 border-b border-foreground/5">
          <Link href="/admin" className="text-xl font-bold tracking-tighter">
            ADMIN<span className="text-primary">.</span>
          </Link>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-2">
          <Link 
            href="/admin" 
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-foreground/5 text-foreground/80 hover:text-foreground transition-colors"
          >
            <LayoutDashboard size={18} />
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link 
            href="/admin/projects" 
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-foreground/5 text-foreground/80 hover:text-foreground transition-colors"
          >
            <FolderKanban size={18} />
            <span className="font-medium">Projects</span>
          </Link>
          <Link 
            href="/admin/messages" 
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-foreground/5 text-foreground/80 hover:text-foreground transition-colors"
          >
            <Mail size={18} />
            <span className="font-medium">Messages</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-foreground/5 space-y-2">
          <Link 
            href="/" 
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-foreground/5 text-foreground/80 hover:text-foreground transition-colors"
          >
            <Home size={18} />
            <span className="font-medium">View Site</span>
          </Link>
          <form action="/auth/signout" method="post">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 text-red-500 transition-colors">
              <LogOut size={18} />
              <span className="font-medium">Logout</span>
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}
