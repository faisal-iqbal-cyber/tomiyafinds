"use client";

import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, BookOpen } from "lucide-react";

const guides = [
  {
    title: "Small Kitchen Upgrades That Make Everyday Cooking Easier",
    category: "HOME & KITCHEN",
    description:
      "Practical ideas for creating a cleaner, smarter and more useful everyday kitchen.",
    image: "/images/guides/kitchen-guide.png",
    href: "/guides/smart-kitchen-upgrades",
    readTime: "5 MIN READ",
    featured: true,
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

export default function GuidesSection() {
  const featuredGuide = guides[0];
  const secondaryGuides = guides.slice(1);

  return (
    <section className="relative z-10 border-t border-white/10 px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-2 text-xs tracking-[0.3em] text-[#dfbd91]">
              <BookOpen size={14} />
              TOMIYA JOURNAL
            </div>

            <h2 className="max-w-3xl text-4xl tracking-[-0.045em] md:text-6xl">
              Ideas for buying
              <span className="block font-serif italic text-[#dfbd91]">
                a little smarter.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-white/45">
              Practical guides, thoughtful ideas and curated inspiration for
              the things you bring into everyday life.
            </p>
          </div>

          <a
            href="/guides"
            className="group flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
          >
            Explore all guides
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* Featured guide */}
        <motion.a
          href={featuredGuide.href}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="group relative block min-h-[620px] overflow-hidden rounded-[32px] border border-white/10 bg-[#151412]"
        >
          <img
            src={featuredGuide.image}
            alt={featuredGuide.title}
            className="absolute inset-0 h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-[1.035]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

          <div className="absolute inset-0 flex items-end p-7 md:p-12 lg:p-16">
            <div className="max-w-2xl">
              <div className="mb-5 flex flex-wrap items-center gap-3 text-[10px] tracking-[0.25em] text-[#dfbd91]">
                <span>{featuredGuide.category}</span>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span className="text-white/45">
                  {featuredGuide.readTime}
                </span>
              </div>

              <h3 className="font-serif text-4xl leading-[1.05] md:text-6xl">
                {featuredGuide.title}
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 md:text-base">
                {featuredGuide.description}
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full border border-white/25 bg-white/10 backdrop-blur-xl transition duration-300 group-hover:border-[#dfbd91] group-hover:bg-[#dfbd91] group-hover:text-black">
                  <ArrowUpRight size={18} />
                </div>

                <span className="text-xs tracking-[0.2em] text-white/60">
                  READ THE GUIDE
                </span>
              </div>
            </div>
          </div>
        </motion.a>

        {/* Secondary guides */}
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {secondaryGuides.map((guide, index) => (
            <motion.a
              key={guide.title}
              href={guide.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -5 }}
              className="group relative min-h-[480px] overflow-hidden rounded-[28px] border border-white/10 bg-[#151412]"
            >
              <img
                src={guide.image}
                alt={guide.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />

              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="mb-3 flex items-center gap-2 text-[9px] tracking-[0.24em] text-[#dfbd91]">
                  <span>{guide.category}</span>
                  <span className="text-white/30">•</span>
                  <span className="text-white/45">{guide.readTime}</span>
                </div>

                <h3 className="font-serif text-3xl leading-tight">
                  {guide.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  {guide.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs tracking-[0.15em] text-white/60 transition group-hover:text-[#dfbd91]">
                  READ GUIDE
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}