"use client";

import { motion } from "motion/react";
import TrendingFinds from "@/components/home/TrendingFinds";
import CategoryUniverse from "@/components/home/CategoryUniverse";
import {
  ArrowRight,
  Search,
  ShoppingBag,
  Sparkles,
  Menu,
} from "lucide-react";

const categories = [
  "Women",
  "Men",
  "Kids",
  "Home",
  "Tech",
  "Beauty",
  "Gifts",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
        <div className="noise" />
      </div>

      {/* Announcement */}
      <div className="relative z-30 border-b border-white/10 bg-white/[0.03] px-6 py-2.5 text-center text-xs tracking-[0.18em] text-white/65">
        CURATED FINDS • SMARTER CHOICES • THINGS WORTH HAVING
      </div>

      {/* Navigation */}
      <header className="relative z-30 mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 lg:px-12">
        <a href="#" className="group">
          <div className="text-2xl font-black tracking-[0.28em]">TOMIYA</div>
          <div className="mt-1 text-[8px] tracking-[0.36em] text-white/40">
            SMART FINDS
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/60 lg:flex">
          {["Discover", "Trending", "Collections", "Guides"].map((item) => (
            <a
              key={item}
              href="#"
              className="transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            className="icon-button hidden sm:grid"
          >
            <Search size={18} />
          </button>
          <button
            aria-label="Saved finds"
            className="icon-button hidden sm:grid"
          >
            <ShoppingBag size={18} />
          </button>
          <button aria-label="Menu" className="icon-button">
            <Menu size={19} />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-125px)] max-w-[1440px] items-center px-6 pb-16 pt-10 lg:px-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-white/65 backdrop-blur-xl"
            >
              <Sparkles size={14} />
              The internet&apos;s interesting finds, refined.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08 }}
              className="max-w-4xl text-[clamp(3.8rem,8vw,8rem)] font-medium leading-[0.88] tracking-[-0.065em]"
            >
              Find something
              <span className="hero-gradient block font-serif italic">
                worth having.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 max-w-xl text-base leading-7 text-white/52 md:text-lg"
            >
              Useful. Distinctive. Beautiful. Discover thoughtfully curated
              finds for you, your home, and everyone you shop for.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <button className="primary-button group">
                Explore the finds
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button className="secondary-button">
                What&apos;s trending
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-2"
            >
              {categories.map((category) => (
                <button key={category} className="category-pill">
                  {category}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Visual object */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.15 }}
            className="relative hidden min-h-[620px] lg:block"
          >
            <div className="hero-orbit">
              <div className="orbital-ring ring-one" />
              <div className="orbital-ring ring-two" />

              <motion.div
                animate={{
                  y: [0, -18, 0],
                  rotate: [-3, 2, -3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="glass-object"
              >
                <div className="glass-inner">
                  <Sparkles size={42} strokeWidth={1} />
                  <span>T</span>
                  <small>CURATED BY TOMIYA</small>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="floating-card card-one"
              >
                <span>01</span>
                <strong>Distinctive</strong>
                <small>Not everything. Just better things.</small>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="floating-card card-two"
              >
                <span>02</span>
                <strong>Worth it</strong>
                <small>Finds chosen for value &amp; usefulness.</small>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <TrendingFinds />
      <CategoryUniverse />
    </main>
  );
}