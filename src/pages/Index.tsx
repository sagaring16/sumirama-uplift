import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Achievements from "@/components/Achievements";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Achievements />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default Index;
