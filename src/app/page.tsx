"use client";
import AboutUs from "@/components/page-sections/aboutsus";
import CtaBox from "@/components/page-sections/cta";
import FaqSection from "@/components/page-sections/faqs";
import Hero from "@/components/page-sections/hero";
import BlogSection from "@/components/page-sections/ourBlog";
import ServicesSection from "@/components/page-sections/ourServices";
import OurTeam from "@/components/page-sections/ourTeam";
import PricingSection from "@/components/page-sections/pricing";
import ScrollingTicker from "@/components/page-sections/scrollingTicker";
import Testimonials from "@/components/page-sections/testimonials";
import WhyChooseUs from "@/components/page-sections/whyChoosUs";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollingTicker />
      <AboutUs />
      <ServicesSection />
      <WhyChooseUs />
      <PricingSection />
      <OurTeam />
      <FaqSection />
      <Testimonials />
      <BlogSection />
      <CtaBox />
      <ScrollingTicker />
    </>
  );
}
