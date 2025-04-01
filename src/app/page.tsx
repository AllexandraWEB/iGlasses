import Image from "next/image";
import Hero from "./components/layout/Hero";
import AboutSection from "./components/layout/AboutSection";



export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutSection />
        {/* <Benefits />
        <Info />
        <Integrations />
        <News />
        <Results />
        <Customers />
        <Supercharge /> */}
      </main>
    </>  
  );
}