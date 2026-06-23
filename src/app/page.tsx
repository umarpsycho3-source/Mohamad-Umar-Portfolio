import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col w-full">
      <Hero />
      <Marquee />
      <Stats />
      <FeaturedProjects />
    </main>
  );
}
