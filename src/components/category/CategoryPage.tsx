"use client";

import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import type { Product } from "@/data/products";

type CategoryPageProps = {
  name: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  products?: Product[];
};

export default function CategoryPage({
  name,
  eyebrow,
  title,
  description,
  image,
  products = [],
}: CategoryPageProps) {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      {/* HERO */}
      <section className="relative min-h-[78vh] overflow-hidden">
        <img
          src={image}
          alt={`${name} finds`}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/25" />

        <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-[1440px] flex-col justify-between px-6 py-8 lg:px-12">
          <a
            href="/"
            className="flex w-fit items-center gap-2 text-sm text-white/60 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to TOMIYA
          </a>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl pb-16"
          >
            <div className="mb-5 flex items-center gap-2 text-xs tracking-[0.32em] text-[#dfbd91]">
              <Sparkles size={14} />
              {eyebrow}
            </div>

            <h1 className="text-[clamp(4rem,9vw,8.5rem)] leading-[0.88] tracking-[-0.06em]">
              {name}
              <span className="block font-serif italic text-[#dfbd91]">
                {title}
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/60 md:text-lg">
              {description}
            </p>

            <a
              href="#finds"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#dfbd91] px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.03]"
            >
              Explore the edit
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="finds"
        className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12"
      >
        <div className="mb-12">
          <p className="mb-3 text-xs tracking-[0.3em] text-[#dfbd91]">
            THE TOMIYA EDIT
          </p>

          <h2 className="text-4xl tracking-[-0.04em] md:text-6xl">
            Curated{" "}
            <span className="font-serif italic text-[#dfbd91]">
              {name} finds.
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-white/45">
            Thoughtfully selected finds worth discovering.
          </p>
        </div>

        {products.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] px-8 py-20 text-center">
            <Sparkles
              size={25}
              className="mx-auto mb-5 text-[#dfbd91]"
            />

            <h3 className="text-2xl font-medium">
              The {name} edit is coming together.
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/45">
              We&apos;re curating useful and distinctive finds for this
              collection.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}