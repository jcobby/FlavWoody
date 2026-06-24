import React from "react";
import Image from "next/image";
import Navbarr from "../components/Navbarr";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden bg-cream">
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="relative flex h-[55vh] min-h-[400px] items-center justify-center overflow-hidden">
        <Image
          src="/imagess/woody5.jpg"
          alt="Contact D'Woody"
          fill
          priority
          className="animate-slow-zoom object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/50 to-charcoal/85" />
        <Navbarr />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-cream">
          <p className="animate-fade-in mb-5 text-xs font-medium uppercase tracking-[0.3em] text-cream/80">
            Contact
          </p>
          <h1 className="animate-fade-up font-serif text-5xl font-semibold tracking-tightest sm:text-6xl lg:text-7xl">
            Let&apos;s build together.
          </h1>
          <p
            className="animate-fade-up mx-auto mt-6 max-w-xl text-cream/80"
            style={{ animationDelay: "0.15s" }}
          >
            Questions, quotes or custom commissions — we&apos;re always happy to
            talk furniture.
          </p>
        </div>
      </section>

      <ContactUs />
      <Footer />
    </main>
  );
}
