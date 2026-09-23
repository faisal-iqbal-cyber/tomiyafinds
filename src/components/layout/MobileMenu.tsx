"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";

const categories = [
  { name: "Women", href: "/women" },
  { name: "Men", href: "/men" },
  { name: "Kids", href: "/kids" },
  { name: "Home", href: "/home" },
  { name: "Tech", href: "/tech" },
  { name: "Beauty", href: "/beauty" },
];

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] overflow-y-auto bg-[#080808]/95 text-white backdrop-blur-2xl"
        >
          <div className="mx-auto min-h-screen max-w-[1440px] px-6 py-7 lg:px-12">
            <div className="flex items-center justify-between">
              <a href="/" onClick={onClose}>
                <div className="text-2xl font-black tracking-[0.28em]">
                  TOMIYA
                </div>
                <div className="mt-1 text-[8px] tracking-[0.36em] text-white/40">
                  SMART FINDS
                </div>
              </a>

              <button
                onClick={onClose}
                aria-label="Close menu"
                className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/[0.04] transition hover:bg-white/10"
              >
                <X size={19} />
              </button>
            </div>

            <div className="grid gap-14 pb-12 pt-20 lg:grid-cols-[1fr_.45fr] lg:pt-28">
              <div>
                <p className="mb-7 text-[10px] tracking-[0.35em] text-[#dfbd91]">
                  DISCOVER
                </p>

                <nav className="flex flex-col">
                  {categories.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={onClose}
                      initial={{ opacity: 0, x: -25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + index * 0.05 }}
                      className="group flex items-center justify-between border-b border-white/10 py-4 font-serif text-4xl transition hover:text-[#dfbd91] sm:text-5xl lg:text-6xl"
                    >
                      {item.name}

                      <ArrowUpRight
                        size={22}
                        className="text-white/20 transition group-hover:text-[#dfbd91]"
                      />
                    </motion.a>
                  ))}
                </nav>
              </div>

              <div className="lg:border-l lg:border-white/10 lg:pl-12">
                <p className="mb-7 text-[10px] tracking-[0.35em] text-[#dfbd91]">
                  EXPLORE TOMIYA
                </p>

                <div className="flex flex-col gap-5">
                  <a
                    href="/guides"
                    onClick={onClose}
                    className="text-lg text-white/65 transition hover:text-white"
                  >
                    TOMIYA Journal
                  </a>

                  <a
                    href="/about"
                    onClick={onClose}
                    className="text-lg text-white/65 transition hover:text-white"
                  >
                    About
                  </a>

                  <a
                    href="/contact"
                    onClick={onClose}
                    className="text-lg text-white/65 transition hover:text-white"
                  >
                    Contact
                  </a>
                </div>

                <div className="mt-14 border-t border-white/10 pt-7">
                  <p className="max-w-xs text-sm leading-7 text-white/35">
                    Thoughtfully curated finds, practical buying ideas and
                    inspiration for everyday life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}