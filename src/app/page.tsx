import Hero from "./components/layout/Hero";
import AboutSection from "./components/layout/AboutSection";
import ContactSection from "./components/layout/ContactSection";



export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutSection />
        <ContactSection />
      </main>
    </>  
  );
}