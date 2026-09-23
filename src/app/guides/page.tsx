"use client";

import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Clock,
  Sparkles,
} from "lucide-react";

const guides = [
  {
    title: "Small Kitchen Upgrades That Make Everyday Cooking Easier",
    category: "HOME & KITCHEN",
    description:
      "Practical ideas for creating a cleaner, smarter and more useful everyday kitchen.",
    image: "/images/guides/kitchen-guide.png",
    href: "/guides/smart-kitchen-upgrades",
    readTime: "5 MIN READ",
  },
  {
    title: "Travel Smarter Without Packing More",
    category: "TRAVEL",
    description:
      "Simple ways to save luggage space and keep your essentials organized.",
    image: "/images/guides/travel-guide.png",
    href: "/guides/travel-smarter",
    readTime: "4 MIN READ",
  },
  {
    title: "Everyday Tech That Actually Feels Useful",
    category: "TECH",
    description:
      "A practical approach to choosing technology that earns its place in your routine.",
    image: "/images/guides/tech-guide.png",
    href: "/guides/useful-everyday-tech",
    readTime: "6 MIN READ",
  },
  {
    title: "The Little Details That Elevate an Everyday Look",
    category: "STYLE",
    description:
      "Thoughtful accessories and styling ideas that add character without overdoing it.",
    image: "/images/guides/style-guide.png",
    href: "/guides/everyday-style-details",
    readTime: "5 MIN READ",
  },
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-15%] top-[5%] h-[500px] w-[500px] rounded-full bg-[#b68b5a]/[0.07] blur-[130px]" />
        <div className="absolute right-[-10%] top-[35%] h-[450px] w-[450px] rounded-full bg-[#dfbd91]/[0.05] blur-[140px]" />
      </div>

      {/* Header */}
      <header className="relative z-20 border-b border-white/10">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 lg:px-12">
          <a href="/" className="group">
            <div className="text-2xl font-black tracking-[0.28em]">
              TOMIYA
            </div>
            <div className="mt-1 text-[8px] tracking-[0.36em] text-white/40">
              SMART FINDS
            </div>
          </a>

          <a
            href="/"
            className="flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back home
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-[1440px] px-6 pb-20 pt-24 lg:px-12 lg:pb-28 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          <div className="mb-6 flex items-center gap-2 text-xs tracking-[0.35em] text-[#dfbd91]">
            <BookOpen size={15} />
            TOMIYA JOURNAL
          </div>

          <h1 className="text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.86] tracking-[-0.065em]">
            Buy less.
            <span className="block font-serif italic text-[#dfbd91]">
              Choose better.
            </span>
          </h1>

          <p className="mt-9 max-w-2xl text-base leading-8 text-white/50 md:text-lg">
            Thoughtful buying guides, practical ideas and curated inspiration
            for making smarter choices about the things you bring into
            everyday life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex items-center gap-3 border-t border-white/10 pt-7 text-xs tracking-[0.18em] text-white/35"
        >
          <Sparkles size={14} className="text-[#dfbd91]" />
          {guides.length} CURATED GUIDES
        </motion.div>
      </section>

      {/* Guides */}
      <section className="relative z-10 border-t border-white/10 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-5 md:grid-cols-2">
            {guides.map((guide, index) => (
              <motion.a
                key={guide.title}
                href={guide.href}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.65,
                  delay: (index % 2) * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group relative min-h-[600px] overflow-hidden rounded-[30px] border border-white/10 bg-[#151412]"
              >
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-[1.05]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/5" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />

                <div className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-inset ring-white/0 transition duration-500 group-hover:ring-[#dfbd91]/30" />

                {/* Arrow */}
                <div className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/30 backdrop-blur-xl transition duration-300 group-hover:border-[#dfbd91] group-hover:bg-[#dfbd91] group-hover:text-black">
                  <ArrowUpRight size={18} />
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-[9px] tracking-[0.25em] text-[#dfbd91]">
                    <span>{guide.category}</span>

                    <span className="h-1 w-1 rounded-full bg-white/30" />

                    <span className="flex items-center gap-1.5 text-white/45">
                      <Clock size={11} />
                      {guide.readTime}
                    </span>
                  </div>

                  <h2 className="max-w-xl font-serif text-3xl leading-[1.08] md:text-4xl lg:text-5xl">
                    {guide.title}
                  </h2>

                  <p className="mt-5 max-w-lg text-sm leading-6 text-white/55">
                    {guide.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-[10px] tracking-[0.2em] text-white/60 transition group-hover:text-[#dfbd91]">
                    READ THE GUIDE
                    <ArrowUpRight size={13} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="relative z-10 border-t border-white/10 px-6 py-28 text-center">
        <p className="mb-4 text-xs tracking-[0.3em] text-[#dfbd91]">
          DISCOVER TOMIYA
        </p>

        <h2 className="mx-auto max-w-3xl text-4xl tracking-[-0.04em] md:text-6xl">
          Find something{" "}
          <span className="font-serif italic text-[#dfbd91]">
            worth having.
          </span>
        </h2>

        <a
          href="/#categories"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#dfbd91] px-7 py-3.5 text-sm font-medium text-black transition duration-300 hover:scale-[1.03]"
        >
          Explore the finds
          <ArrowUpRight size={16} />
        </a>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 text-xs text-white/30 md:flex-row md:items-center md:justify-between">
          <span>© 2026 TOMIYA</span>

          <span>
            Thoughtful finds. Smarter choices.
          </span>
        </div>
      </footer>
    </main>
  );
}