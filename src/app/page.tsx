import FadeIn from "@/components/animations/FadeIn";

import HeroStats from "@/components/Herostats";
import HomeGallery from "@/components/HomeGallery";
import Hero from "@/components/pages/landing/Hero";
import HomeProjects from "@/components/pages/landing/HomeProjects";
import HomeServices from "@/components/pages/landing/HomeServices";
import Stats from "@/components/Stats";
import  {TestimonialCarousel}  from "@/components/TestimonialCarousel";

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
      <TestimonialCarousel />
      
    </>
  );
}
