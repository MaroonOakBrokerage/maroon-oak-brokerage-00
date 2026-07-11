export type FAQ = { q: string; a: React.ReactNode };

export default function FAQAccordion({ items, firstOpen = true }: { items: FAQ[]; firstOpen?: boolean }) {
  return (
    <div className="mx-auto max-w-[780px]">
      {items.map((item, i) => (
        <details key={item.q} className="group border-b border-charcoal/10" open={firstOpen && i === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 font-serif text-[15.5px] font-semibold text-maroon">
            {item.q}
            <span className="text-lg font-normal text-gold group-open:hidden">+</span>
            <span className="hidden text-lg font-normal text-gold group-open:inline">–</span>
          </summary>
          <p className="max-w-[680px] pb-6 font-sans text-[14.5px] text-[#55504a]">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
