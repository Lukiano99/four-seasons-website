"use client";
import Link from "next/link";
import AboutUs from "./_components/AboutUs/about-us";
import Products from "./_components/Products/products";
import Manufacturing from "./_components/Manufacturing/manufacturing";
import FAQs from "./_components/FAQs/faqs";
import Contact from "./_components/Contact/contact";
import Orders from "./_components/Orders/orders";
import Hero from "./_components/Hero/hero";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <AboutUs />
      <Products />
      <Manufacturing />
      <FAQs />
      <Contact />
      <Orders />
      <Footer />
    </main>
  );
}
