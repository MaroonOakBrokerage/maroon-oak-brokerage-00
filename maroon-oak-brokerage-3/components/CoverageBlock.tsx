import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";

export default function CoverageBlock({ product, reverse }: { product: Product; reverse?: boolean }) {
  return (
    <div id={product.id} className="border-b border-charcoal/10 py-16 last:border-b-0">
      <div className="mx-auto max-w-[1200px] px-8">
        <div
          className={`grid grid-cols-1 gap-12 md:gap-14 items-start ${
            reverse ? "md:grid-cols-[1.1fr_0.9fr]" : "md:grid-cols-[0.9fr_1.1fr]"
          }`}
        >
          <div className={`flex min-h-[250px] items-center justify-center rounded-lg border border-gold/20 bg-gradient-to-br from-maroon-deep to-ink p-12 ${reverse ? "md:order-2" : ""}`}>
            <Image src="/logo-icon.png" alt={`${product.name} icon`} width={100} height={83} className="w-[100px] opacity-95" />
          </div>
          <div>
            <span className="mb-4 inline-block rounded-full bg-gold/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-gold-dim">
              {product.industries ? "Business Lines" : "Personal Lines"}
            </span>
            <h3 className="mb-4 font-serif text-[27px] font-semibold text-maroon">{product.name}</h3>
            <p className="mb-3 font-sans text-[15px] text-[#55504a]">{product.overview}</p>

            <h4 className="mt-6 mb-3 font-sans text-[13.5px] font-bold uppercase tracking-wide text-gold-dim">
              {product.whyLabel}
            </h4>
            <p className="mb-3 font-sans text-[15px] text-[#55504a]">{product.why}</p>

            <h4 className="mt-6 mb-3 font-sans text-[13.5px] font-bold uppercase tracking-wide text-gold-dim">
              {product.optionsLabel}
            </h4>
            <ul className="mb-2 grid grid-cols-1 gap-x-5 gap-y-2 sm:grid-cols-2">
              {product.options.map((opt) => (
                <li key={opt} className="relative pl-5 font-sans text-sm text-[#55504a]">
                  <span className="absolute left-0 text-gold">—</span>
                  {opt}
                </li>
              ))}
            </ul>

            {product.industries && (
              <>
                <h4 className="mt-6 mb-3 font-sans text-[13.5px] font-bold uppercase tracking-wide text-gold-dim">
                  Industries We Serve
                </h4>
                <div className="mb-5 flex flex-wrap gap-2">
                  {product.industries.map((ind) => (
                    <span
                      key={ind}
                      className="rounded-full bg-gold/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-gold-dim"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </>
            )}

            <div className="my-6">
              <Link
                href="/contact#quote"
                className="inline-flex items-center justify-center rounded bg-maroon px-5 py-3 text-xs font-bold uppercase tracking-wide text-stone transition-colors hover:bg-maroon-light"
              >
                Request a {product.name} Quote
              </Link>
            </div>

            {product.faqs && product.faqs.length > 0 && (
              <>
                <h4 className="mt-6 mb-3 font-sans text-[13.5px] font-bold uppercase tracking-wide text-gold-dim">
                  Frequently Asked Questions
                </h4>
                {product.faqs.map((faq) => (
                  <details key={faq.q} className="border-b border-charcoal/10 group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-serif text-[14.5px] font-semibold text-maroon">
                      {faq.q}
                      <span className="text-gold text-lg font-normal group-open:hidden">+</span>
                      <span className="hidden text-gold text-lg font-normal group-open:inline">–</span>
                    </summary>
                    <p className="pb-4 max-w-[680px] font-sans text-sm text-[#55504a]">{faq.a}</p>
                  </details>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
