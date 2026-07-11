import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CoverageBlock from "@/components/CoverageBlock";
import ContinueExploring from "@/components/ContinueExploring";
import { businessProducts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Business Insurance",
  description:
    "Explore commercial insurance from Maroon Oak Brokerage: general liability, workers' comp, commercial auto, BOP, cyber liability, D&O, EPLI, bonds, and more for Texas businesses.",
};

export default function BusinessInsurancePage() {
  return (
    <>
      <PageHero
        image="office"
        breadcrumb="Business Insurance"
        title="Business Insurance Built Around How You Actually Operate."
        subtitle="From a first-year LLC to an established commercial operation, we match coverage to your real risk — not a one-size-fits-all package."
      />

      <section className="bg-stone py-14">
        <div className="mx-auto max-w-[1200px] px-8 text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-gold-dim">Jump to a Coverage Line</p>
          <div className="flex flex-wrap justify-center gap-2">
            {businessProducts.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="rounded border border-maroon/30 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-maroon transition-colors hover:border-maroon hover:bg-maroon/5"
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {businessProducts.map((product, i) => (
        <CoverageBlock key={product.id} product={product} reverse={i % 2 === 1} />
      ))}

      <section className="bg-gradient-to-br from-maroon-deep to-maroon py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="rounded-2xl border border-stone/20 px-8 py-16 text-center text-stone md:px-24">
            <h2 className="mb-4 font-serif text-3xl font-semibold md:text-[32px]">Not Sure What Your Business Needs?</h2>
            <p className="mx-auto mb-8 max-w-[520px] font-sans text-stone/82">
              We&rsquo;ll walk through your actual operations with you before recommending a single policy &mdash;
              that&rsquo;s Understanding First, applied to business coverage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact#quote"
                className="inline-flex items-center justify-center rounded bg-gradient-to-br from-gold-light to-gold px-8 py-4 text-[13.5px] font-bold uppercase tracking-wide text-maroon-deep transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(200,160,74,0.35)]"
              >
                Get a Quote
              </a>
              <a
                href="tel:+17374778228"
                className="inline-flex items-center justify-center rounded border border-stone/35 px-8 py-4 text-[13.5px] font-bold uppercase tracking-wide text-stone transition-all hover:border-gold hover:bg-gold/10"
              >
                Call 737-477-8228
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContinueExploring
        items={[
          { label: "Personal Insurance", description: "See coverage for your auto, home, family, and more.", href: "/personal-insurance" },
          { label: "About Us", description: "Learn the philosophy behind how we serve clients.", href: "/about" },
          { label: "Claims", description: "Understand how claims work and what to do first.", href: "/claims" },
        ]}
      />
    </>
  );
}
