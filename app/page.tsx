"use client";
import ContactForm from "@/components/ContactForm";
import FAQs from "@/components/FAQs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import MainPage from "@/components/MainPage";
import TopCycles from "@/components/TopCycles";
export default function Home() {
  return (
    <div>
      <MainPage />
      <TopCycles />
      <Features />
      <ContactForm />
      <FAQs />
      <Footer />
    </div>
  );
}
