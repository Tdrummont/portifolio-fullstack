import BeautyHero from "@/components/BeautyHero";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import BookingSection from "@/components/BookingSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <BeautyHero />
      <ServicesSection />
      <ProductsSection />
      <BookingSection />
    </div>
  );
};

export default Index;
