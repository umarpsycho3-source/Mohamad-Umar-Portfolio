import { createClient } from "@/utils/supabase/server";
import { Trash2 } from "lucide-react";
import { deleteMessage } from "./actions";

export default async function AdminMessages() {
  const supabase = await createClient();
  const { data: messages } = await supabase.from('messages').select('*').order('created_at', { ascending: false });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Contact Messages</h1>
      </div>

      <div className="glass rounded-2xl border border-foreground/5 bg-background/50 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-foreground/10 bg-foreground/5">
              <th className="p-4 font-semibold text-foreground/80">Date</th>
              <th className="p-4 font-semibold text-foreground/80">Name</th>
              <th className="p-4 font-semibold text-foreground/80">Email</th>
              <th className="p-4 font-semibold text-foreground/80">Message</th>
              <th className="p-4 font-semibold text-foreground/80 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {!messages || messages.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-foreground/60">
                  No messages found. Once someone fills out your contact form, they will appear here.
                </td>
              </tr>
            ) : (
              messages.map((msg) => (
                <tr key={msg.id} className="border-b border-foreground/5 hover:bg-foreground/5 transition-colors">
                  <td className="p-4 text-sm whitespace-nowrap text-foreground/60">
                    {new Date(msg.created_at).toLocaleDateString()}
                  </td>
                  <td className="p-4 font-medium">{msg.name}</td>
                  <td className="p-4">
                    <a href={`mailto:${msg.email}`} className="text-primary hover:underline">{msg.email}</a>
                  </td>
                  <td className="p-4">
                    <div className="text-sm font-semibold mb-1">{msg.subject}</div>
                    <div className="text-sm text-foreground/80 max-w-md line-clamp-2">{msg.message}</div>
                  </td>
                  <td className="p-4 text-right">
                    <form action={deleteMessage}>
                      <input type="hidden" name="id" value={msg.id} />
                      <button type="submit" className="text-red-500 hover:bg-red-500/10 p-2 rounded-lg transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </form>
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
