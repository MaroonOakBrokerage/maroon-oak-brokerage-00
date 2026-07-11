import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CoverageBlock from "@/components/CoverageBlock";
import CTASection from "@/components/CTASection";
import ContinueExploring from "@/components/ContinueExploring";
import { personalProducts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Personal Insurance",
  description:
    "Explore personal insurance coverage from Maroon Oak Brokerage: auto, home, renters, condo, motorcycle, boat, RV, umbrella, life, and valuable items coverage in Austin, Texas.",
};

export default function PersonalInsurancePage() {
  return (
    <>
      <PageHero
        image="skylineDay"
        breadcrumb="Personal Insurance"
        title="Personal Insurance That Protects What Matters Most."
        subtitle="From your first car to your family home, we match coverage to what you actually own and how you actually live — not a generic bundle."
      />

      <section className="bg-stone py-14">
        <div className="mx-auto max-w-[1200px] px-8 text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-gold-dim">Jump to a Coverage Line</p>
          <div className="flex flex-wrap justify-center gap-2">
            {personalProducts.map((p) => (
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

      {personalProducts.map((product, i) => (
        <CoverageBlock key={product.id} product={product} reverse={i % 2 === 1} />
      ))}

      <section className="bg-gradient-to-br from-maroon-deep to-maroon py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="rounded-2xl border border-stone/20 px-8 py-16 text-center text-stone md:px-24">
            <h2 className="mb-4 font-serif text-3xl font-semibold md:text-[32px]">Not Sure Which Coverage You Need?</h2>
            <p className="mx-auto mb-8 max-w-[520px] font-sans text-stone/82">
              That&rsquo;s exactly what &ldquo;Understanding First&rdquo; means &mdash; tell us about your situation
              and we&rsquo;ll help you figure it out together.
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
          { label: "Business Insurance", description: "See coverage built for how your business operates.", href: "/business-insurance" },
          { label: "About Us", description: "Learn the philosophy behind how we serve clients.", href: "/about" },
          { label: "Claims", description: "Understand how claims work and what to do first.", href: "/claims" },
        ]}
      />
    </>
  );
}
