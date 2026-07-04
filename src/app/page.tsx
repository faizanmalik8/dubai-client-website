import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import WhyChooseUs from "@/components/WhyChooseUs";
import Carousel from "@/components/Carousel";
import FAQ from "@/components/FAQ";
import { 
  HowToBuy, 
  StylishImageGrid, 
  WeAreBest, 
  CompatibleDevices, 
  BestProviders, 
  Features, 
  InstallationGuide 
} from "@/components/HomeComponents";

export default function Home() {
  return (
    <>
      <Hero />
      <Pricing />
      <HowToBuy />
      <StylishImageGrid />
      <WeAreBest />
      <CompatibleDevices />
      <BestProviders />
      <WhyChooseUs />
      <Carousel />
      <Features />
      <InstallationGuide />
      <FAQ />
    </>
  );
}
