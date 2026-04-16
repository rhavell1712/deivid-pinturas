import { Header } from "@/_components/Header/header";
import HeroSection from "@/_components/HeroSection/herosection";
import About from "@/_components/About/about";
import Services from "@/_components/Services/services";
import Portfolio from "@/_components/Portfolio/portfolio";
import FloatingWhatsAppButton from "@/_components/FloatingWhatsAppButton/floatingwhatsappbutton";
import Footer from "@/_components/Footer/footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-auto">
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Portfolio />
      <FloatingWhatsAppButton />
      <Footer />
    </main>
  );
}

