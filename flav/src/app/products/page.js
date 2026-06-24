"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import Navbarr from "../components/Navbarr";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const images = Array.from({ length: 35 }, (_, i) => i + 1)
  .filter((n) => n !== 33) // photo_33 reserved for editorial use elsewhere
  .map((n) => `/imagess/productImages/photo_${n}.jpg`);

export default function ProductsPage() {
  const [index, setIndex] = useState(null);
  const isOpen = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    []
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    []
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, prev, next]);

  return (
    <main className="overflow-x-hidden bg-cream">
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="relative flex h-[60vh] min-h-[420px] items-center justify-center overflow-hidden">
        <Image
          src="/imagess/woody3.jpg"
          alt="Our products"
          fill
          priority
          className="animate-slow-zoom object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/50 to-charcoal/80" />
        <Navbarr />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-cream">
          <p className="animate-fade-in mb-5 text-xs font-medium uppercase tracking-[0.3em] text-cream/80">
            The Collection
          </p>
          <h1 className="animate-fade-up font-serif text-5xl font-semibold tracking-tightest sm:text-6xl lg:text-7xl">
            Our Products
          </h1>
          <p
            className="animate-fade-up mx-auto mt-6 max-w-xl text-cream/80"
            style={{ animationDelay: "0.15s" }}
          >
            Every creation tells a story — browse our handcrafted wooden
            furniture and décor, each piece made with care and tradition.
          </p>
        </div>
      </section>

      {/* ───────────────────────── GALLERY ───────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal className="mb-12 text-center">
          <p className="eyebrow justify-center">Browse</p>
          <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight tracking-tightest text-espresso sm:text-5xl">
            Explore the collection.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-espresso/60">
            Tap any piece to view it full-size.
          </p>
        </Reveal>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {images.map((img, idx) => (
            <button
              key={img}
              onClick={() => setIndex(idx)}
              className="group relative block w-full overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-wood-500"
            >
              <Image
                src={img}
                alt={`Product ${idx + 1}`}
                width={600}
                height={750}
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/60 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-cream/90 text-espresso">
                  ↗
                </span>
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ───────────────────────── CTA ───────────────────────── */}
      <section className="bg-espresso py-20 text-center text-cream lg:py-24">
        <Reveal className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-4xl font-semibold tracking-tightest sm:text-5xl">
            Don&apos;t see exactly what you want?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-cream/70">
            Every piece can be made to order. Tell us your dimensions, wood and
            finish — we&apos;ll craft it for you.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-wood-500 px-8 py-4 text-sm font-medium text-cream transition-all duration-300 hover:bg-cream hover:text-espresso"
          >
            Request a custom piece
          </Link>
        </Reveal>
      </section>

      {/* ───────────────────────── LIGHTBOX ───────────────────────── */}
      <Dialog open={isOpen} onClose={close} className="relative z-[60]">
        <div className="fixed inset-0 bg-charcoal/95 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <button
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-cream/30 text-2xl text-cream transition-colors hover:bg-cream hover:text-espresso"
          >
            ✕
          </button>
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-3 grid h-12 w-12 place-items-center rounded-full border border-cream/30 text-2xl text-cream transition-colors hover:bg-cream hover:text-espresso sm:left-8"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-3 grid h-12 w-12 place-items-center rounded-full border border-cream/30 text-2xl text-cream transition-colors hover:bg-cream hover:text-espresso sm:right-8"
          >
            ›
          </button>

          <Dialog.Panel className="max-h-[88vh] max-w-5xl overflow-hidden rounded-2xl">
            {isOpen && (
              <Image
                key={images[index]}
                src={images[index]}
                alt="Selected product"
                width={1400}
                height={1000}
                className="animate-fade-in max-h-[88vh] w-auto rounded-2xl object-contain"
              />
            )}
          </Dialog.Panel>
        </div>
      </Dialog>

      <Footer />
    </main>
  );
}
