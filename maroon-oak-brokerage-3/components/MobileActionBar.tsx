import Link from "next/link";
import { PhoneIcon, HomeIcon, BuildingIcon } from "./Icons";
import { siteConfig } from "@/lib/data";

// Sticky mobile-only action bar. Hidden on lg+ screens where the header's
// phone number and "Get a Quote" button are already visible.
export default function MobileActionBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-[150] flex h-16 items-stretch border-t border-charcoal/10 bg-white/97 shadow-[0_-4px_16px_rgba(14,12,11,0.08)] backdrop-blur lg:hidden"
    >
      <a
        href={`tel:${siteConfig.phoneTel}`}
        className="flex flex-1 flex-col items-center justify-center gap-1 border-r border-charcoal/10 text-[10.5px] font-bold uppercase tracking-wide text-maroon"
      >
        <PhoneIcon className="h-[18px] w-[18px] stroke-maroon" />
        Call
      </a>
      <Link
        href="/personal-insurance"
        className="flex flex-1 flex-col items-center justify-center gap-1 border-r border-charcoal/10 text-[10.5px] font-bold uppercase tracking-wide text-maroon"
      >
        <HomeIcon className="h-[18px] w-[18px] stroke-maroon" />
        Personal
      </Link>
      <Link
        href="/business-insurance"
        className="flex flex-1 flex-col items-center justify-center gap-1 border-r border-charcoal/10 text-[10.5px] font-bold uppercase tracking-wide text-maroon"
      >
        <BuildingIcon className="h-[18px] w-[18px] stroke-maroon" />
        Business
      </Link>
      <Link
        href="/contact#quote"
        className="flex flex-1 flex-col items-center justify-center gap-1 bg-gradient-to-br from-gold-light to-gold text-[10.5px] font-bold uppercase tracking-wide text-maroon-deep"
      >
        Get a Quote
      </Link>
    </nav>
  );
}
