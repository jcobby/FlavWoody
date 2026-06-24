"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/aboutUs", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

function Navbarr({ forceSolid = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const solid = forceSolid || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-espresso/10 bg-cream/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-12">
        {/* Brand */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className={`flex items-center gap-2 font-serif text-xl font-semibold tracking-tightest transition-colors lg:text-2xl ${
            solid ? "text-espresso" : "text-cream"
          }`}
        >
          <span
            className={`grid h-8 w-8 place-items-center rounded-full text-sm font-bold transition-colors ${
              solid ? "bg-wood-500 text-cream" : "bg-cream/15 text-cream backdrop-blur"
            }`}
          >
            D
          </span>
          D&apos;Woody
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  solid
                    ? active
                      ? "text-wood-700"
                      : "text-espresso/70 hover:text-espresso"
                    : active
                    ? "text-cream"
                    : "text-cream/70 hover:text-cream"
                }`}
              >
                {link.label}
                {active && (
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-px ${
                      solid ? "bg-wood-500" : "bg-cream"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
              solid
                ? "bg-espresso text-cream hover:bg-wood-600"
                : "bg-cream/10 text-cream backdrop-blur hover:bg-cream hover:text-espresso"
            }`}
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45 bg-cream" : solid ? "bg-espresso" : "bg-cream"
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
              isOpen ? "opacity-0" : solid ? "bg-espresso" : "bg-cream"
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45 bg-cream" : solid ? "bg-espresso" : "bg-cream"
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-espresso px-6 pt-28 transition-all duration-500 md:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-2">
          {links.map((link, i) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: isOpen ? `${120 + i * 70}ms` : "0ms" }}
                className={`border-b border-cream/10 py-4 font-serif text-3xl transition-all duration-500 ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                } ${active ? "text-wood-300" : "text-cream"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-wood-500 px-6 py-4 text-base font-medium text-cream"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}

export default Navbarr;
