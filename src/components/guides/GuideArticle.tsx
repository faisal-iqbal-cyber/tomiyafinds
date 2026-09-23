"use client";

import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import type { Product } from "@/data/products";

type Section = {
  heading: string;
  text: string;
};

type GuideArticleProps = {
  category: string;
  title: string;
  intro: string;
  readTime: string;
  image: string;
  sections: Section[];
  products?: Product[];
};

export default function GuideArticle({
  category,
  title,
  intro,
  readTime,
  image,
  sections,
  products = [],
}: GuideArticleProps) {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      {/* HERO */}
      <section className="relative min-h-[78vh] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/30" />

        <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-[1440px] flex-col justify-between px-6 py-8 lg:px-12">
          <a
            href="/#guides"
            className="flex w-fit items-center gap-2 text-sm text-white/60 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to TOMIYA Journal
          </a>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl pb-16"
          >
            <div className="mb-5 flex flex-wrap items-center gap-3 text-[10px] tracking-[0.28em] text-[#dfbd91]">
              <span>{category}</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />

              <span className="flex items-center gap-2 text-white/55">
                <Clock size={12} />
                {readTime}
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-[clamp(3rem,7vw,6.5rem)] leading-[0.98] tracking-[-0.045em]">
              {title}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
              {intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="relative z-10 mx-auto max-w-[900px] px-6 py-24">
        <div className="mb-16 border-y border-white/10 py-8">
          <div className="flex gap-4">
            <Sparkles
              size={20}
              className="mt-1 shrink-0 text-[#dfbd91]"
            />

            <p className="font-serif text-2xl italic leading-relaxed text-white/80 md:text-3xl">
              Better buying isn&apos;t about having more. It&apos;s about
              choosing things that genuinely improve the way you live.
            </p>
          </div>
        </div>

        <div className="space-y-16">
          {sections.map((section, index) => (
            <motion.section
              key={section.heading}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 text-xs tracking-[0.28em] text-[#dfbd91]">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                {section.heading}
              </h2>

              <p className="mt-5 text-base leading-8 text-white/60">
                {section.text}
              </p>
            </motion.section>
          ))}
        </div>
      </article>

      {/* RELATED PRODUCTS */}
      {products.length > 0 && (
        <section className="border-t border-white/10 px-6 py-24 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-xs tracking-[0.3em] text-[#dfbd91]">
                  RELATED FINDS
                </p>

                <h2 className="text-4xl tracking-[-0.04em] md:text-6xl">
                  From the{" "}
                  <span className="font-serif italic text-[#dfbd91]">
                    TOMIYA edit.
                  </span>
                </h2>
              </div>

              <a
                href="/#trending"
                className="group flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
              >
                Explore more finds
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <p className="mt-7 text-[11px] leading-5 text-white/35">
              As an Amazon Associate I earn from qualifying purchases.
            </p>
          </div>
        </section>
      )}

      {/* END CTA */}
      <section className="border-t border-white/10 px-6 py-24 text-center">
        <Sparkles
          size={22}
          className="mx-auto mb-5 text-[#dfbd91]"
        />

        <h2 className="font-serif text-4xl md:text-5xl">
          Keep discovering.
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/45">
          Explore more thoughtful finds and practical ideas from TOMIYA.
        </p>

        <a
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#dfbd91] px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.03]"
        >
          Explore TOMIYA
          <ArrowRight size={16} />
        </a>
      </section>
    </main>
  );
}