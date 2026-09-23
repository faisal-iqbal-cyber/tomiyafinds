"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    name: "Women",
    eyebrow: "FOR EVERY YOU",
    description: "Style, beauty and essentials to make your everyday brighter.",
    image: "/images/women.png",
    href: "/women",
  },
  {
    name: "Men",
    eyebrow: "MODERN ESSENTIALS",
    description: "Timeless style and must-haves for every occasion.",
    image: "/images/men.png",
    href: "/men",
  },
  {
    name: "Kids",
    eyebrow: "BRIGHTER TOMORROWS",
    description: "Fun, safe and thoughtful finds for their growing world.",
    image: "/images/kids.png",
    href: "/kids",
  },
  {
    name: "Home",
    eyebrow: "A BETTER HOME",
    description: "Beautiful, functional finds for spaces you love.",
    image: "/images/home.png",
    href: "/home",
  },
  {
    name: "Tech",
    eyebrow: "SMARTER LIVING",
    description: "Innovative gadgets and useful tech worth discovering.",
    image: "/images/tech.png",
    href: "/tech",
  },
  {
    name: "Beauty",
    eyebrow: "RADIATE DAILY",
    description: "Self-care and beauty finds selected with intention.",
    image: "/images/beauty.png",
    href: "/beauty",
  },
];

export default function CategoryUniverse() {
  return (
    <section id="categories" className="relative z-10 px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-xs tracking-[0.45em] text-white/50">
            SHOP YOUR WORLD
          </p>

          <h2 className="text-5xl tracking-[-0.045em] md:text-7xl">
            Discover by{" "}
            <span className="font-serif italic text-[#dfbd91]">
              Category
            </span>
          </h2>

          <p className="mt-4 text-white/45">
            Curated for every part of your life.
          </p>
        </motion.div>

        {/* Category grid */}
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => (
            <motion.a
              key={category.name}
              href={category.href}
              aria-label={`Explore ${category.name} finds`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.06,
              }}
              whileHover={{ y: -5 }}
              className="group relative min-h-[460px] overflow-hidden rounded-[26px] border border-white/10 bg-[#151412]"
            >
              {/* Category image */}
              <img
                src={category.image}
                alt={`${category.name} curated finds`}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
              />

              {/* Cinematic overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/10" />

              <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent opacity-80" />

              {/* Gold hover glow */}
              <div className="absolute inset-0 bg-[#cfa777]/0 transition duration-500 group-hover:bg-[#cfa777]/[0.06]" />

              {/* Border glow */}
              <div className="pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-inset ring-white/0 transition duration-500 group-hover:ring-[#dfbd91]/30" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-7 md:p-9">
                <p className="mb-3 text-[10px] tracking-[0.32em] text-[#dfbd91]">
                  {category.eyebrow}
                </p>

                <h3 className="font-serif text-4xl md:text-5xl">
                  {category.name}
                </h3>

                <p className="mt-4 max-w-[270px] text-sm leading-6 text-white/65">
                  {category.description}
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/20 backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:border-[#dfbd91] group-hover:bg-[#dfbd91] group-hover:text-black">
                    <ArrowUpRight size={18} />
                  </div>

                  <span className="translate-x-[-8px] text-xs tracking-[0.18em] text-white/0 transition duration-300 group-hover:translate-x-0 group-hover:text-white/70">
                    EXPLORE
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}