import React from "react";
import Navbarr from "../components/Navbarr";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export default function page() {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="bg-black w-full h-16">
        <Navbarr />
      </div>

      <ContactUs />
      <Footer />
    </div>
  );
}
