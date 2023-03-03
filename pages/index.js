import react from "react";
import Navbar from "../components/navbar";
import Footer from "../components/foooter";
import Hero from "./Home/Hero";
import Testimoni from "./Home/testimoni";
import Contact from "../components/contact";


export default function home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Testimoni />
      <Contact />
      <Footer />
    </div>
  );
}
