import { ArrowUpRight } from "lucide-react";

const shopLinks = [
  { name: "Women", href: "/women" },
  { name: "Men", href: "/men" },
  { name: "Kids", href: "/kids" },
  { name: "Home", href: "/home" },
  { name: "Tech", href: "/tech" },
  { name: "Beauty", href: "/beauty" },
];

const infoLinks = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "TOMIYA Journal", href: "/guides" },
];

const legalLinks = [
  { name: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#080808] px-6 pb-8 pt-20 text-white lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-14 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-[1.5fr_.7fr_.7fr_.8fr]">
          <div>
            <a href="/" className="inline-block">
              <div className="text-3xl font-black tracking-[0.28em]">
                TOMIYA
              </div>
              <div className="mt-2 text-[9px] tracking-[0.36em] text-white/35">
                SMART FINDS
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">
              Thoughtfully curated finds, practical buying ideas and
              inspiration for everyday life.
            </p>

            <a
              href="/guides"
              className="mt-7 inline-flex items-center gap-2 text-xs tracking-[0.16em] text-[#dfbd91]"
            >
              EXPLORE THE JOURNAL
              <ArrowUpRight size={14} />
            </a>
          </div>

          <FooterColumn title="DISCOVER" links={shopLinks} />
          <FooterColumn title="TOMIYA" links={infoLinks} />
          <FooterColumn title="INFORMATION" links={legalLinks} />
        </div>

        <div className="flex flex-col gap-4 py-7 text-[11px] leading-5 text-white/30 md:flex-row md:items-center md:justify-between">
          <p>© 2026 TOMIYA. All rights reserved.</p>

          <p className="max-w-lg md:text-right">
            As an Amazon Associate I earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) {
  return (
    <div>
      <p className="mb-5 text-[10px] tracking-[0.25em] text-[#dfbd91]">
        {title}
      </p>

      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="w-fit text-sm text-white/45 transition hover:text-white"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}