"use client";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import dynamic from "next/dynamic";

// Dynamically import components that might cause SSR issues
const DynamicBackgroundGradientAnimation = dynamic(
  () =>
    import("@/components/ui/GradientBg").then(
      (mod) => mod.BackgroundGradientAnimation
    ),
  { ssr: false }
);

const DynamicBentoGrid = dynamic(
  () => import("@/components/ui/BentoGrid").then((mod) => mod.BentoGrid),
  { ssr: false }
);

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Approach />
        <Experience />
        <Clients />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
