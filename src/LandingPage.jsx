import { useEffect } from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import BusinessFutureSection from "./components/BusinessFutureSection/BusinessFutureSection";

const LandingPage = () => {
  useEffect(() => {
  }, []);

  return (
    <div className="min-h-screen">
      <Header/>
      <HeroSection />
      <FeaturesSection />
      <BusinessFutureSection/>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
