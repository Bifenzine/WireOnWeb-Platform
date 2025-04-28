"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ClientOnly from "@/components/wrapper/ClientOnly";

const Home = () => {
  return (
    <ClientOnly>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <Approach />
          {/* <RecentProjects /> */}
          <Experience />
          <Clients />
          <Footer />
        </div>
      </main>
    </ClientOnly>
  );
};

export default Home;
