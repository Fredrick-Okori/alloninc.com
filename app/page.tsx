import Grain from "@/components/Grain";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Diagnosis from "@/components/Diagnosis";
import Method from "@/components/Method";
import Structure from "@/components/Structure";
import Engage from "@/components/Engage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Grain />
      <Nav />
      <main>
        <Hero />
        <Diagnosis />
        <Method />
        <Structure />
        <Engage />
      </main>
      <Footer />
    </>
  );
}
