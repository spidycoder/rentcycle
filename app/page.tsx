import ContactForm from "@/Components/ContactForm";
import FAQs from "@/Components/FAQs";
import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import MainPage from "@/Components/MainPage";
import TopCycles from "@/Components/TopCycles";
export default function Home() {
  return (
    <div>
      <Header />
      <MainPage />
      <TopCycles />
      <Features />
      <ContactForm />
      <FAQs />
      <Footer />
    </div>
  );
}
