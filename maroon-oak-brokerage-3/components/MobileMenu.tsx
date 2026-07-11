"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/lib/data";
import { PhoneIcon } from "./Icons";
import { useToggle } from "@/hooks/useToggle";

export default function MobileMenu() {
  const [open, toggleOpen, setOpen] = useToggle(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <button
        aria-label="Open menu"
        aria-expanded={open}
        onClick={toggleOpen}
        className="text-2xl text-maroon"
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div className="fixed inset-0 top-24 z-50 bg-stone overflow-y-auto">
          <nav className="flex flex-col px-8 py-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`border-b border-maroon/10 py-4 text-base font-semibold uppercase tracking-wide ${
                  pathname === item.href ? "text-maroon" : "text-charcoal"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="mt-6 flex items-center gap-2 font-bold text-maroon"
            >
              <PhoneIcon className="w-4 h-4" />
              {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/contact#quote"
              onClick={() => setOpen(false)}
              className="mt-6 rounded bg-gradient-to-br from-gold-light to-gold px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-maroon-deep"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
