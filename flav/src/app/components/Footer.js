import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const links = [
  { href: "/", label: "Home" },
  { href: "/aboutUs", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="flex items-center gap-2 font-serif text-2xl font-semibold tracking-tightest"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-wood-500 text-sm font-bold text-cream">
                D
              </span>
              D&apos;Woody
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed text-cream/60">
              Handcrafted wood products made with love and precision — bringing
              the warmth of nature into homes, offices and spaces across Ghana.
            </p>
            <a
              href="https://www.instagram.com/d_woodyshop?igsh=cnJzMmg0M3VsejBu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="mt-7 inline-grid h-11 w-11 place-items-center rounded-full border border-cream/20 text-cream/70 transition-all duration-300 hover:border-wood-400 hover:bg-wood-500 hover:text-cream"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-cream/50">
              Explore
            </h4>
            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/75 transition-colors hover:text-wood-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-cream/50">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-cream/75">
              <li>Accra, Ghana</li>
              <li>
                <a
                  href="tel:+233592080783"
                  className="transition-colors hover:text-wood-300"
                >
                  +233 592 080 783
                </a>{" "}
                ·{" "}
                <a
                  href="tel:+233261713604"
                  className="transition-colors hover:text-wood-300"
                >
                  +233 261 713 604
                </a>
              </li>
              <li>
                <a
                  href="mailto:Stevbaxter24@gmail.com"
                  className="transition-colors hover:text-wood-300"
                >
                  Stevbaxter24@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-sm text-cream/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} D&apos;Woody. All rights reserved.</p>
          <p>Crafted with care in Accra, Ghana.</p>
        </div>
      </div>
    </footer>
  );
}
