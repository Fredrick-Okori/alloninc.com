import Grain from "@/components/Grain";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PricingContent from "@/components/PricingContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allon Inc - Financial Management Services & Pricing",
  description:
    "We install the financial management system that catches where you are losing money - and shows you exactly where to look.",
};

export default function Home() {
  return (
    <>
      <Grain />
      <Nav />
      <main>
        <PricingContent />
      </main>
      <Footer />
    </>
  );
}
