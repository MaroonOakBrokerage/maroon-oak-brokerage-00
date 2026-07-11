import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ContinueExploring from "@/components/ContinueExploring";
import { AlertIcon, PhoneIcon, ClockIcon } from "@/components/Icons";
import { claimsSteps, claimTips, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Claims",
  description:
    "Learn how to report an insurance claim directly to your carrier, plus claim tips and after-hours guidance from Maroon Oak Brokerage.",
};

export default function ClaimsPage() {
  return (
    <>
      <PageHero
        image="bridge"
        breadcrumb="Claims"
        title="Filing a Claim Starts With Your Carrier."
        subtitle="Your policy is written and backed by the carrier we bound it with — that's who handles your claim directly, fastest. Here's exactly how to report it, and how we can still help."
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="flex flex-wrap items-center justify-between gap-5 rounded-lg border border-maroon/20 bg-maroon/5 px-7 py-6">
            <div className="flex items-center gap-4">
              <AlertIcon className="h-8 w-8 flex-shrink-0 stroke-maroon" />
              <div>
                <strong className="block font-serif text-[15.5px] text-maroon">Need to report a claim right now?</strong>
                <span className="font-sans text-[13.5px] text-[#55504a]">
                  To report a claim, use the claims number shown on your insurance ID card or declarations page. Need
                  help identifying your carrier or understanding the process? Call us at {siteConfig.phoneDisplay}.
                </span>
              </div>
            </div>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="rounded bg-maroon px-5 py-3 text-xs font-bold uppercase tracking-wide text-stone hover:bg-maroon-light"
            >
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-stone py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">How Claims Work</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            Your Claim Is Handled by Your Carrier
          </h2>
          <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            When we bind your policy, it&rsquo;s written through a specific insurance carrier &mdash; and that
            carrier owns the claims process from first notice through payout. Filing directly with them is always
            the fastest path.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-charcoal/10 bg-white p-8">
              <PhoneIcon className="mb-4 h-6 w-6 stroke-maroon" />
              <h3 className="mb-2.5 font-serif text-xl font-semibold text-maroon">Report It to Your Carrier</h3>
              <p className="font-sans text-sm text-[#55504a]">
                Use the claims number shown on your insurance ID card or declarations page &mdash; that&rsquo;s the
                fastest way to open a claim and get an adjuster assigned.
              </p>
            </div>
            <div className="rounded-lg border border-charcoal/10 bg-white p-8">
              <ClockIcon className="mb-4 h-6 w-6 stroke-maroon" />
              <h3 className="mb-2.5 font-serif text-xl font-semibold text-maroon">Keep Your Policy Info Handy</h3>
              <p className="font-sans text-sm text-[#55504a]">
                Your policy number and carrier name are on your declarations page &mdash; if you can&rsquo;t find it,
                we&rsquo;re happy to look it up for you.
              </p>
            </div>
            <div className="rounded-lg border border-charcoal/10 bg-white p-8">
              <AlertIcon className="mb-4 h-6 w-6 stroke-maroon" />
              <h3 className="mb-2.5 font-serif text-xl font-semibold text-maroon">Call Us With Questions</h3>
              <p className="font-sans text-sm text-[#55504a]">
                Not sure if something is covered? We&rsquo;re glad to help you understand your policy at any point.
                Maroon Oak helps you navigate your coverage &mdash; your carrier handles and pays the claim.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="carriers" className="bg-white py-24">
        <div className="mx-auto max-w-[820px] px-8 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-gold-dim">Reporting a Claim</p>
          <h2 className="mb-5 font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            Report Your Claim Directly to Your Carrier
          </h2>
          <p className="font-sans text-[17px] text-[#55504a]">
            To report a claim, use the claims number shown on your insurance ID card or declarations page. Need help
            identifying your carrier or understanding the process? Call us at {siteConfig.phoneDisplay}.
          </p>
        </div>
      </section>

      <section className="bg-stone py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-gold-dim">Filing a Claim</p>
              <h2 className="mb-6 font-serif text-3xl font-semibold text-maroon">Step-by-Step: What To Do First</h2>
              <ol className="space-y-4">
                {claimsSteps.map((s, i) => (
                  <li key={s.title} className="font-sans text-[15px] text-[#55504a]">
                    <strong className="text-maroon">
                      {i + 1}. {s.title}.
                    </strong>{" "}
                    {s.description}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-gold-dim">Claim Tips</p>
              <h2 className="mb-6 font-serif text-3xl font-semibold text-maroon">A Few Things That Help</h2>
              <ul className="space-y-2.5">
                {claimTips.map((tip) => (
                  <li key={tip} className="relative pl-5 font-sans text-sm text-[#55504a]">
                    <span className="absolute left-0 font-bold text-gold">—</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-maroon-deep to-maroon py-24 text-stone">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-gold">After Hours</p>
              <h2 className="mb-4 font-serif text-3xl font-semibold">Support Outside Business Hours</h2>
              <p className="font-sans text-stone/85">
                Accidents and emergencies don&rsquo;t wait for business hours. Your carrier&rsquo;s 24/7 claims line
                is always your fastest option any time, day or night. If you have questions about your coverage
                itself, call us during business hours and we&rsquo;ll help you understand where things stand.
              </p>
            </div>
            <div className="rounded-lg border border-stone/20 bg-stone/5 p-8">
              <h3 className="mb-3 font-serif text-xl font-semibold text-gold">Business Hours</h3>
              {siteConfig.hours.map((h) => (
                <div key={h.day} className="flex justify-between font-sans text-sm text-stone/85">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </div>
              ))}
              <p className="mt-3 font-sans text-xs text-stone/60">Your carrier&rsquo;s 24/7 claims line remains available at all times.</p>
            </div>
          </div>
        </div>
      </section>

      <ContinueExploring
        items={[
          { label: "Personal Insurance", description: "Review your auto, home, and family coverage.", href: "/personal-insurance" },
          { label: "Business Insurance", description: "Review your commercial coverage lines.", href: "/business-insurance" },
          { label: "Contact Us", description: "Reach a licensed advisor with coverage questions.", href: "/contact" },
        ]}
      />

      <CTASection
        title="Have a Coverage Question Before You File?"
        description="Understanding your policy before you ever need to use it is exactly what we're here for."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
