import { createClient } from "@/utils/supabase/server";
import { FolderKanban, Mail, Users } from "lucide-react";

export default async function AdminDashboard() {
  const supabase = await createClient();
  
  // Fetch real stats:
  const { count: projectCount } = await supabase.from('projects').select('*', { count: 'exact', head: true })
  const { count: messageCount } = await supabase.from('messages').select('*', { count: 'exact', head: true })

  const stats = [
    { name: "Total Projects", value: projectCount?.toString() || "0", icon: FolderKanban, color: "text-blue-500" },
    { name: "Total Messages", value: messageCount?.toString() || "0", icon: Mail, color: "text-green-500" },
    { name: "Total Views", value: "1,204", icon: Users, color: "text-purple-500" }, // Mock views for now
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="glass p-6 rounded-2xl border border-foreground/5 bg-background/50">
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-xl bg-foreground/5 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <h3 className="text-foreground/60 font-medium">{stat.name}</h3>
            </div>
            <p className="text-4xl font-bold text-foreground">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="glass p-8 rounded-2xl border border-foreground/5 bg-background/50">
        <h2 className="text-xl font-bold mb-4">Welcome to your Admin Portal!</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          This is where you will manage your portfolio content. Once connected to Supabase, 
          you will be able to dynamically add new projects to your website and read messages sent from your Contact form.
        </p>
        <p className="text-foreground/80 leading-relaxed">
          <strong>Next Steps:</strong> Check the <code className="px-2 py-1 bg-foreground/10 rounded-md">implementation_plan.md</code> for instructions on how to set up your Supabase database.
        </p>
      </div>
    </div>
  );
}
