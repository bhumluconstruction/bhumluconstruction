import FadeIn from "@/components/animations/FadeIn";
import CTA from "@/components/CTA";
import HeroStats from "@/components/Herostats";
import HomeGallery from "@/components/HomeGallery";
import Hero from "@/components/pages/landing/Hero";
import HomeProjects from "@/components/pages/landing/HomeProjects";
import HomeServices from "@/components/pages/landing/HomeServices";
import Stats from "@/components/Stats";
export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroStats />
      <FadeIn>
        <HomeServices />
      </FadeIn>
      <HomeProjects />
      <Stats />
      <HomeGallery />
      <CTA />
    </>
  );
}
