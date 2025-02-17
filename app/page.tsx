import AboutUsSection from "@/components/AboutUsSection/AboutUsSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import PortfolioSection from "@/components/PortfolioSection/PortfolioSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialSection";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Design Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <AboutUsSection />
      <PortfolioSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}
