import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import EditProjectForm from "./EditProjectForm";

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: project } = await supabase.from('projects').select('*').eq('id', id).single();

  if (!project) {
    notFound();
  }

  return <EditProjectForm project={project} />;
}
