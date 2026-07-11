import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function CTASection({
  title = "Protect What Matters Most.",
  description = "Let's start the conversation. Tell us what you need covered, and a licensed advisor will follow up within one business day.",
  primaryLabel = "Get a Quote",
  primaryHref = "/contact#quote",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="bg-stone py-24">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_20%_20%,rgba(200,160,74,0.14),transparent_55%),linear-gradient(160deg,#3A0A18,#0E0C0B)] px-8 py-16 text-center text-stone md:px-24">
          <div className="relative z-10">
            <h2 className="mb-4 font-serif text-3xl font-semibold md:text-[32px]">{title}</h2>
            <p className="mx-auto mb-8 max-w-[520px] font-sans text-stone/82">{description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center rounded bg-gradient-to-br from-gold-light to-gold px-8 py-4 text-[13.5px] font-bold uppercase tracking-wide text-maroon-deep transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(200,160,74,0.35)]"
              >
                {primaryLabel}
              </Link>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="inline-flex items-center justify-center rounded border border-stone/35 px-8 py-4 text-[13.5px] font-bold uppercase tracking-wide text-stone transition-all hover:border-gold hover:bg-gold/10"
              >
                Call {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
