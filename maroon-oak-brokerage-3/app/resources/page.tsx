import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { resourceArticles, downloads, glossary } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Educational insurance resources from Maroon Oak Brokerage: plain-language guides, downloadable checklists, an insurance glossary, and answers to common questions.",
};

const resourceFaqs = [
  {
    q: "How often should I review my coverage?",
    a: "At least once a year, ideally at renewal — and any time your life changes significantly (a new home, a new vehicle, a growing business, or a major purchase).",
  },
  {
    q: "Why did my premium go up even though I didn't file a claim?",
    a: "Rates can shift due to broader market trends, rebuild/replacement cost inflation, or changes in your coverage — not just your own claims history. We'll walk through your specific renewal with you.",
  },
  {
    q: "What's the difference between an independent agent and a captive agent?",
    a: "A captive agent sells one company's products exclusively. An independent agent, like Maroon Oak, shops multiple carriers to find the best fit — our loyalty is to you, not to one carrier.",
  },
  {
    q: "Can I bundle my home and auto policies?",
    a: "Often, yes — and it can lower your overall premium. We'll show you the real numbers rather than assuming a bundle is automatically the better deal.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        image="cityDusk"
        breadcrumb="Resources"
        title="The Most Educational Insurance Resource in Texas — That's the Goal."
        subtitle="Guides, checklists, and plain-language explanations, published before we ever talk price. Understanding First starts here."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">Educational Guides</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            Learn Before You Buy
          </h2>
          <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            Real answers to the questions we hear most often &mdash; written in plain language, not insurance-speak.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {resourceArticles.map((a) => (
              <div key={a.title} className="overflow-hidden rounded-lg border border-charcoal/10 bg-white transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-[154px] items-center justify-center bg-gradient-to-br from-maroon-deep to-maroon">
                  <Image src="/logo-icon.png" alt="" width={54} height={45} className="opacity-95" />
                </div>
                <div className="p-6">
                  <div className="mb-2.5 text-[10.5px] font-bold uppercase tracking-wide text-gold-dim">{a.category}</div>
                  <h3 className="mb-2.5 font-serif text-[17px] font-semibold text-maroon">{a.title}</h3>
                  <p className="mb-4 font-sans text-[13.5px] text-[#55504a]">{a.description}</p>
                  <Link href="/contact" className="text-xs font-bold uppercase tracking-wide text-gold-dim hover:text-maroon">
                    Read the Guide &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">Downloadable Resources</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            Guides &amp; Checklists to Keep
          </h2>
          <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            Save these for your next renewal, or share them with someone shopping for coverage for the first time.
          </p>
          <div className="mx-auto max-w-[720px] space-y-3">
            {downloads.map((d) => (
              <div key={d.name} className="flex items-center justify-between gap-4 rounded-lg border border-charcoal/10 bg-white p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-maroon/[0.06] text-[11px] font-bold text-maroon">
                    PDF
                  </div>
                  <div>
                    <strong className="block font-sans text-[14.5px] text-charcoal">{d.name}</strong>
                    <span className="font-sans text-xs text-[#8a8178]">{d.meta}</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="rounded border border-maroon/30 px-4 py-2 text-xs font-bold uppercase tracking-wide text-maroon hover:border-maroon hover:bg-maroon/5"
                >
                  Request
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">Insurance Glossary</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            Plain-Language Definitions
          </h2>
          <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            The terms that show up on nearly every policy, explained without the jargon.
          </p>
          <div className="mx-auto max-w-[820px] columns-1 gap-10 md:columns-2">
            {glossary.map((g) => (
              <div key={g.term} className="mb-1 break-inside-avoid border-b border-charcoal/10 py-4">
                <h4 className="mb-1.5 font-serif text-[15px] font-semibold text-maroon">{g.term}</h4>
                <p className="font-sans text-[13.5px] text-[#55504a]">{g.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">Common Questions</p>
          <h2 className="mx-auto mb-14 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={resourceFaqs} />
        </div>
      </section>

      <CTASection
        title="Have a Question We Haven't Answered Yet?"
        description="Ask us directly — if it's a question you have, it's probably one worth adding to this library."
        primaryLabel="Ask a Question"
        primaryHref="/contact"
      />
    </>
  );
}
