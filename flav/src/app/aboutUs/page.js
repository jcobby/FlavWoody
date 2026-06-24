import Image from "next/image";
import Link from "next/link";
import Navbarr from "../components/Navbarr";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const values = [
  {
    title: "Quality",
    desc: "We use only the finest wood and materials, ensuring every product is durable, beautiful and long-lasting.",
  },
  {
    title: "Sustainability",
    desc: "We source our materials responsibly and strive to minimise our environmental impact at every step.",
  },
  {
    title: "Customer-Centric",
    desc: "Every client is part of our journey. We listen, craft and deliver with your vision firmly in mind.",
  },
];

export default function About() {
  return (
    <main className="overflow-x-hidden bg-cream">
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="relative flex h-[70vh] min-h-[480px] items-center justify-center overflow-hidden">
        <Image
          src="/imagess/woody4.jpg"
          alt="D'Woody workshop"
          fill
          priority
          className="animate-slow-zoom object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/45 to-charcoal/80" />
        <Navbarr />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-cream">
          <p className="animate-fade-in mb-5 text-xs font-medium uppercase tracking-[0.3em] text-cream/80">
            Our Story
          </p>
          <h1 className="animate-fade-up font-serif text-5xl font-semibold tracking-tightest sm:text-6xl lg:text-7xl">
            About D&apos;Woody
          </h1>
          <p className="animate-fade-up mx-auto mt-6 max-w-xl text-cream/80" style={{ animationDelay: "0.15s" }}>
            A bespoke furniture house built on craftsmanship, patience and a
            deep respect for natural wood.
          </p>
        </div>
      </section>

      {/* ───────────────────────── VISION / MISSION ───────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="/imagess/productImages/photo_33.jpg"
                alt="Craftsmanship in detail"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className="eyebrow">Crafted with Passion</p>
            <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight tracking-tightest text-espresso sm:text-5xl">
              The one-stop shop for furniture in Ghana.
            </h2>

            <div className="mt-8 space-y-8">
              <div className="border-l-2 border-wood-400 pl-6">
                <h3 className="font-serif text-xl text-espresso">Our Vision</h3>
                <p className="mt-2 leading-relaxed text-espresso/70">
                  To become the leading brand in the furniture industry in
                  Accra, Ghana — and the one-stop shop for furniture.
                </p>
              </div>
              <div className="border-l-2 border-wood-400 pl-6">
                <h3 className="font-serif text-xl text-espresso">Our Mission</h3>
                <p className="mt-2 leading-relaxed text-espresso/70">
                  To establish a world-class furniture shop producing wooden
                  products from the finest of woods — retailed across Ghana and
                  exported to countries around the world.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────── VALUES ───────────────────────── */}
      <section className="bg-espresso py-24 text-cream lg:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-wood-300">What We Stand For</p>
            <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight tracking-tightest sm:text-5xl">
              Our core values.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 120}>
                <div className="h-full rounded-3xl border border-cream/10 bg-cream/[0.04] p-8 transition-colors duration-300 hover:bg-cream/[0.08]">
                  <span className="font-serif text-5xl font-semibold text-wood-400">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-serif text-2xl">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-cream/70">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── QUOTE BAND ───────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-28">
        <Reveal>
          <span className="font-serif text-6xl leading-none text-wood-400">&ldquo;</span>
          <p className="mt-4 font-serif text-3xl font-medium leading-snug tracking-tight text-espresso sm:text-4xl">
            We don&apos;t just build furniture — we craft pieces meant to be
            lived with and passed down.
          </p>
          <Link href="/products" className="btn-primary mt-10">
            See our work
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </section>

      <ContactUs />
      <Footer />
    </main>
  );
}
