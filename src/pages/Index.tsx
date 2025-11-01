import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Shop Premium Products",
      "description": "Discover our curated collection of premium fashion, electronics, and jewelry",
      "url": window.location.href,
      "mainEntity": {
        "@type": "ItemList",
        "name": "Product Catalog",
        "description": "Browse our collection of quality products"
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
