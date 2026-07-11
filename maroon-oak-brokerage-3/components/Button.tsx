import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "maroon" | "outline" | "outline-dark";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 rounded font-bold uppercase tracking-wide transition-all duration-200 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-br from-gold-light to-gold text-maroon-deep hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(200,160,74,0.35)]",
  maroon: "bg-maroon text-stone hover:bg-maroon-light hover:-translate-y-0.5",
  outline:
    "border border-maroon/30 text-maroon hover:border-maroon hover:bg-maroon/5 bg-transparent",
  "outline-dark":
    "border border-stone/35 text-stone hover:border-gold hover:bg-gold/10 bg-transparent",
};

const sizes: Record<Size, string> = {
  md: "px-8 py-4 text-[13.5px]",
  sm: "px-5 py-3 text-xs",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} className={classes}>
      {children}
    </button>
  );
}
