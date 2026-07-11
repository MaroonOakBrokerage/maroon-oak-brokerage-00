import Link from "next/link";
import Image from "next/image";
import HeroToggle from "@/components/HeroToggle";
import { Card, StatBlock } from "@/components/Card";
import ExplorerTiles from "@/components/ExplorerTiles";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { CheckCircleIcon, HandshakeIcon, ShieldIcon } from "@/components/Icons";
import {
  homeFaqs,
  resourceArticles,
  heroImages,
  whatYouCanExpect,
  explorerTiles,
  processSteps,
  siteConfig,
} from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* Hero with animated Personal / Business toggle */}
      <section className="relative overflow-hidden py-24 md:py-[140px]">
        <Image
          src={heroImages.cityDusk.url}
          alt={heroImages.cityDusk.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(14,12,11,0.95)_0%,rgba(58,10,24,0.90)_32%,rgba(14,12,11,0.62)_68%,rgba(14,12,11,0.42)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-black/10" />
        <span className="absolute bottom-3 right-4 z-10 text-[10px] text-stone/30">
          Photo: {heroImages.cityDusk.credit}
        </span>
        <div className="relative z-10 mx-auto max-w-[1200px] px-8">
          <HeroToggle />
          <div className="mt-11 flex flex-wrap gap-9">
            <div className="text-[12.5px] text-stone/65">
              <strong className="block font-serif text-2xl font-semibold text-gold">Independent</strong>
              Access to multiple carriers
            </div>
            <div className="text-[12.5px] text-stone/65">
              <strong className="block font-serif text-2xl font-semibold text-gold">Texas</strong>
              Serving clients statewide, remotely
            </div>
            <div className="text-[12.5px] text-stone/65">
              <strong className="block font-serif text-2xl font-semibold text-gold">1 Business Day</strong>
              Our response-time standard
            </div>
          </div>
        </div>
      </section>

      {/* Why Maroon Oak */}
      <section className="bg-stone py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">Why Maroon Oak</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            Insurance Starts With Understanding
          </h2>
          <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            Every recommendation begins with listening. As an independent brokerage, our loyalty is to you — not to
            any single carrier.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card icon={<CheckCircleIcon className="w-6 h-6 stroke-maroon" />} title="Understanding First">
              Before we ever discuss policies or premiums, we take the time to understand your goals, your family,
              your business, and what matters most to you.
            </Card>
            <Card icon={<HandshakeIcon className="w-6 h-6 stroke-maroon" />} title="Independent &amp; Unbiased">
              We work with multiple carriers to build customized solutions — not a one-size-fits-all policy pushed
              by a single company&rsquo;s sales quota.
            </Card>
            <Card icon={<ShieldIcon className="w-6 h-6 stroke-maroon" />} title="Relationships, Not Transactions">
              Our goal isn&rsquo;t to become one of the largest brokerages. It&rsquo;s to become one of the most
              trusted &mdash; built on relationships that last.
            </Card>
          </div>
        </div>
      </section>

      {/* Guided explorer */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">Find Your Coverage</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            What Are You Looking to Protect?
          </h2>
          <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            Choose what matters most to you, and we&rsquo;ll point you to the coverage that fits.
          </p>
          <ExplorerTiles tiles={explorerTiles} />
        </div>
      </section>

      {/* How it works */}
      <section className="bg-stone py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">How It Works</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            A Simple, Honest Process
          </h2>
          <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            No pressure, no jargon — just a clear path from a conversation to coverage you understand.
          </p>
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* What we cover */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">What We Cover</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            Personal &amp; Business Insurance, In One Place
          </h2>
          <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            From a first car to a growing company, we build coverage around your actual life &mdash; not a generic
            bundle.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-charcoal/10 bg-white p-8 transition-transform hover:-translate-y-1 hover:shadow-md">
              <Image src="/logo-icon.png" alt="" width={40} height={33} className="mb-4" />
              <h3 className="mb-2.5 font-serif text-xl font-semibold text-maroon">Personal Insurance</h3>
              <p className="mb-4 font-sans text-sm text-[#55504a]">
                Auto, home, renters, condo, motorcycle, boat, RV, umbrella, life, and valuable items coverage &mdash;
                matched to your household.
              </p>
              <Link href="/personal-insurance" className="text-[12.5px] font-bold uppercase tracking-wide text-gold-dim hover:text-maroon">
                Explore Personal Insurance &rarr;
              </Link>
            </div>
            <div className="rounded-lg border border-charcoal/10 bg-white p-8 transition-transform hover:-translate-y-1 hover:shadow-md">
              <Image src="/logo-icon.png" alt="" width={40} height={33} className="mb-4" />
              <h3 className="mb-2.5 font-serif text-xl font-semibold text-maroon">Business Insurance</h3>
              <p className="mb-4 font-sans text-sm text-[#55504a]">
                General liability, workers&rsquo; comp, commercial property, cyber, bonds, and more &mdash; coverage
                built around how your business operates.
              </p>
              <Link href="/business-insurance" className="text-[12.5px] font-bold uppercase tracking-wide text-gold-dim hover:text-maroon">
                Explore Business Insurance &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story band */}
      <section className="relative overflow-hidden py-24 text-stone">
        <Image
          src={heroImages.office.url}
          alt={heroImages.office.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(58,10,24,0.94)_0%,rgba(14,12,11,0.90)_55%,rgba(14,12,11,0.75)_100%)]" />
        <span className="absolute bottom-3 right-4 z-10 text-[10px] text-stone/30">
          Photo: {heroImages.office.credit}
        </span>
        <div className="relative z-10 mx-auto max-w-[1200px] px-8">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-gold">Our Story</p>
              <h2 className="mb-5 font-serif text-3xl font-semibold md:text-[38px]">Rooted in Texas. Built on Trust.</h2>
              <p className="mb-6 font-sans text-stone/82">
                Maroon Oak Brokerage was founded on the belief that insurance should be built on relationships, not
                transactions. Our mission is to protect what matters most by first understanding the people we serve.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded border border-stone/35 px-8 py-4 text-[13.5px] font-bold uppercase tracking-wide text-stone transition-all hover:border-gold hover:bg-gold/10"
              >
                Read Our Story
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <StatBlock value="2026" label="Founded in Austin, Texas" />
              <StatBlock value="Texas" label="Serving clients statewide, remotely" />
              <StatBlock value="1 Day" label="Response-time standard" />
              <StatBlock value="25+" label="Personal &amp; commercial coverage lines" />
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="bg-stone py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">Our Standard</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            What You Can Expect
          </h2>
          <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            Maroon Oak is a newly founded independent brokerage. Rather than publish reviews we haven&rsquo;t
            earned yet, here&rsquo;s the standard we hold ourselves to with every client.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {whatYouCanExpect.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-lg border border-charcoal/10 bg-white p-6">
                <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 stroke-gold-dim" />
                <div>
                  <h3 className="mb-1.5 font-serif text-[15px] font-semibold text-maroon">{item.title}</h3>
                  <p className="font-sans text-[13.5px] text-[#55504a]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carrier network */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[820px] px-8 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-gold-dim">Carrier Access</p>
          <h2 className="mb-5 font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            Independent Access, Not One Company&rsquo;s Product
          </h2>
          <p className="font-sans text-[17px] text-[#55504a]">{siteConfig.carrierStatement}</p>
        </div>
      </section>

      {/* Educational resources teaser */}
      <section className="bg-stone py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">Learn Before You Buy</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            Educational Resources
          </h2>
          <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            Understanding First isn&rsquo;t a tagline &mdash; it&rsquo;s why we publish plain-language guides before
            we ever talk price.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {resourceArticles.slice(0, 3).map((a) => (
              <div key={a.title} className="overflow-hidden rounded-lg border border-charcoal/10 bg-white transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-[154px] items-center justify-center bg-gradient-to-br from-maroon-deep to-maroon">
                  <Image src="/logo-icon.png" alt="" width={54} height={45} className="opacity-95" />
                </div>
                <div className="p-6">
                  <div className="mb-2.5 text-[10.5px] font-bold uppercase tracking-wide text-gold-dim">{a.category}</div>
                  <h3 className="mb-2.5 font-serif text-[17px] font-semibold text-maroon">{a.title}</h3>
                  <p className="mb-4 font-sans text-[13.5px] text-[#55504a]">{a.description}</p>
                  <Link href="/resources" className="text-xs font-bold uppercase tracking-wide text-gold-dim hover:text-maroon">
                    Read the Guide &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/resources"
              className="inline-flex items-center justify-center rounded border border-maroon/30 px-8 py-4 text-[13.5px] font-bold uppercase tracking-wide text-maroon transition-all hover:border-maroon hover:bg-maroon/5"
            >
              Visit the Resource Library
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">Common Questions</p>
          <h2 className="mx-auto mb-14 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            Frequently Asked Questions
          </h2>
          <FAQAccordion
            items={homeFaqs.map((f) => ({ q: f.q, a: f.a }))}
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
