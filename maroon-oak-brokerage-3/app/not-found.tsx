import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-8 py-24 text-center">
      <p className="mb-3 font-serif text-6xl font-semibold text-maroon">404</p>
      <h1 className="mb-4 font-serif text-2xl font-semibold text-maroon">Page Not Found</h1>
      <p className="mb-8 max-w-md font-sans text-[#55504a]">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded bg-gradient-to-br from-gold-light to-gold px-8 py-4 text-[13.5px] font-bold uppercase tracking-wide text-maroon-deep transition-all hover:-translate-y-0.5"
      >
        Back to Home
      </Link>
    </section>
  );
}
