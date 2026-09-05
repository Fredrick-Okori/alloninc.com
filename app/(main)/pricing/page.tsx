import Grain from "@/components/Grain";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PricingContent from "@/components/PricingContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allon Inc - Financial Management Services Pricing",
  description:
    "We install the financial management system that catches it - and shows you exactly where to look.",
};

export default function PricingPage() {
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
