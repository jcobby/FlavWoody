import Image from "next/image";
import Link from "next/link";
import Navbarr from "./components/Navbarr";
import ContactUs from "./components/ContactUs";
import SlideShow from "./components/SlideShow";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

const featured = [
  { src: "/imagess/homepage/home1.jpg", span: "lg:col-span-2 lg:row-span-2" },
  { src: "/imagess/homepage/home5.jpg", span: "" },
  { src: "/imagess/homepage/home8.jpg", span: "" },
  { src: "/imagess/homepage/home3.jpg", span: "lg:col-span-2" },
];

const categories = [
  { name: "Living", img: "/imagess/homepage/home2.jpg" },
  { name: "Dining", img: "/imagess/homepage/home6.jpg" },
  { name: "Bedroom", img: "/imagess/homepage/home9.jpg" },
  { name: "Workspace", img: "/imagess/homepage/home11.jpg" },
];

const steps = [
  {
    no: "01",
    title: "Consultation",
    desc: "We listen to how you live and work, then translate your vision into a design built around your space.",
  },
  {
    no: "02",
    title: "Crafting",
    desc: "Our makers shape the finest hardwoods by hand — joinery, sanding and finishing done with patience and precision.",
  },
  {
    no: "03",
    title: "Delivery",
    desc: "Each finished piece is inspected, protected and delivered to your door, ready to last for generations.",
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-cream">
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="relative flex h-[100svh] min-h-[640px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/imagess/woodyOne.jpg"
            alt="Handcrafted wooden furniture"
            fill
            priority
            className="animate-slow-zoom object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/85" />
        </div>

        <Navbarr />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-cream">
          <p className="animate-fade-in mb-6 inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.3em] text-cream/80">
            <span className="h-px w-8 bg-wood-300" />
            Bespoke Furniture — Handmade in Ghana
            <span className="h-px w-8 bg-wood-300" />
          </p>
          <h1
            className="animate-fade-up font-serif text-[2.6rem] font-semibold leading-[1.05] tracking-tightest text-balance sm:text-6xl lg:text-7xl"
            style={{ opacity: 0 }}
          >
            Where fine timber becomes timeless living.
          </h1>
          <p
            className="animate-fade-up mx-auto mt-7 max-w-xl text-base leading-relaxed text-cream/80 text-pretty sm:text-lg"
            style={{ opacity: 0, animationDelay: "0.15s" }}
          >
            D&apos;Woody Shop designs, builds and delivers high-quality, durable
            furniture — tailored for homes, offices, schools and hospitality.
          </p>
          <div
            className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ opacity: 0, animationDelay: "0.3s" }}
          >
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-cream px-8 py-4 text-sm font-medium text-espresso transition-all duration-300 hover:bg-wood-500 hover:text-cream"
            >
              Explore the Collection
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-cream/40 px-8 py-4 text-sm font-medium text-cream backdrop-blur-sm transition-all duration-300 hover:border-cream hover:bg-cream/10"
            >
              Commission a Piece
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/40 p-1.5">
            <span className="h-2 w-1 animate-bounce rounded-full bg-cream/70" />
          </div>
        </div>
      </section>

      {/* ───────────────────────── MARQUEE ───────────────────────── */}
      <div className="border-y border-espresso/10 bg-sand py-5">
        <div className="flex select-none overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
            {[...Array(2)].map((_, group) =>
              [
                "Bespoke Joinery",
                "Solid Hardwoods",
                "Made to Order",
                "Hand-Finished",
                "Homes & Offices",
                "Schools & Hospitality",
              ].map((t) => (
                <span
                  key={`${group}-${t}`}
                  className="flex items-center gap-12 whitespace-nowrap font-serif text-xl text-espresso/70 sm:text-2xl"
                >
                  {t}
                  <span className="text-wood-500">✦</span>
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      {/* ───────────────────────── PHILOSOPHY ───────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight tracking-tightest text-espresso sm:text-5xl">
              Built by hand, designed to outlast trends.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-espresso/70">
              Every D&apos;Woody piece begins with carefully chosen timber and
              ends in the hands of a craftsperson who treats it like their own.
              We believe furniture should be beautiful, honest and built to be
              passed down — not replaced.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <p className="font-serif text-4xl font-semibold text-wood-600">
                  100%
                </p>
                <p className="mt-1 text-sm text-espresso/60">
                  Handcrafted, made to order
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl font-semibold text-wood-600">
                  4
                </p>
                <p className="mt-1 text-sm text-espresso/60">
                  Sectors we furnish, end to end
                </p>
              </div>
            </div>
            <Link href="/aboutUs" className="btn-ghost mt-10">
              Our Story
              <span aria-hidden>→</span>
            </Link>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="/imagess/homepage/home4.jpg"
                alt="Craftsman finishing a wooden piece"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-espresso px-6 py-5 text-cream shadow-xl sm:block">
              <p className="font-serif text-lg">Accra, Ghana</p>
              <p className="text-sm text-cream/60">Crafted locally · Shipped widely</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────── CATEGORIES ───────────────────────── */}
      <section className="bg-espresso py-24 text-cream lg:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-wood-300">What We Craft</p>
            <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight tracking-tightest sm:text-5xl">
              Furniture for every room and every reason.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {categories.map((cat, i) => (
              <Reveal key={cat.name} delay={i * 100}>
                <Link
                  href="/products"
                  className="group relative block aspect-[3/4] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                    <span className="font-serif text-xl">{cat.name}</span>
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-cream/40 text-sm transition-all duration-300 group-hover:border-cream group-hover:bg-cream group-hover:text-espresso">
                      →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── FEATURED GALLERY (BENTO) ───────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="eyebrow">Selected Work</p>
            <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight tracking-tightest text-espresso sm:text-5xl">
              Our finest wood creations.
            </h2>
          </div>
          <Link href="/products" className="btn-primary shrink-0">
            View all products
            <span aria-hidden>→</span>
          </Link>
        </Reveal>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {featured.map((item, i) => (
            <Reveal
              key={item.src}
              delay={i * 80}
              className={`group relative overflow-hidden rounded-3xl ${item.span}`}
            >
              <Image
                src={item.src}
                alt={`Featured creation ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/20" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────────────────── PROCESS ───────────────────────── */}
      <section className="bg-sand py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">The Process</p>
            <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight tracking-tightest text-espresso sm:text-5xl">
              From first sketch to your front door.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.no} delay={i * 120}>
                <div className="border-t border-espresso/15 pt-6">
                  <span className="font-serif text-5xl font-semibold text-wood-400">
                    {step.no}
                  </span>
                  <h3 className="mt-5 font-serif text-2xl text-espresso">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-espresso/70">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── SHOWCASE SLIDESHOW ───────────────────────── */}
      <section className="bg-cream py-24 lg:py-28">
        <Reveal className="mx-auto mb-12 max-w-2xl px-6 text-center">
          <p className="eyebrow justify-center">In the Showroom</p>
          <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight tracking-tightest text-espresso sm:text-5xl">
            A closer look at the details.
          </h2>
        </Reveal>
        <SlideShow />
      </section>

      {/* ───────────────────────── CTA BAND ───────────────────────── */}
      <section className="relative overflow-hidden">
        <Image
          src="/imagess/woody3.jpg"
          alt="Workshop"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center text-cream lg:py-36">
          <Reveal>
            <p className="eyebrow justify-center text-wood-300">Let&apos;s Build</p>
            <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight tracking-tightest text-balance sm:text-6xl">
              Have something timeless in mind?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-cream/80">
              Tell us about your space and we&apos;ll craft furniture made to fit
              it — and to last.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-wood-500 px-8 py-4 text-sm font-medium text-cream transition-all duration-300 hover:bg-cream hover:text-espresso"
            >
              Start your commission
            </Link>
          </Reveal>
        </div>
      </section>

      <ContactUs />
      <Footer />
    </main>
  );
}
