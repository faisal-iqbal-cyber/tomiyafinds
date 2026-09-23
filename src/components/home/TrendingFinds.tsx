"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

export default function TrendingFinds() {
  return (
    <section className="relative z-10 border-t border-white/10 px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-4 text-xs tracking-[.3em] text-[#c6a173]">
              THE TOMIYA EDIT
            </div>

            <h2 className="max-w-2xl text-4xl tracking-[-.04em] md:text-6xl">
              Finds that deserve
              <span className="block font-serif italic text-[#dfc09a]">
                your attention.
              </span>
            </h2>
          </div>

          <button className="flex items-center gap-2 text-sm text-white/55 transition hover:text-white">
            View all finds <ArrowRight size={16} />
          </button>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.09 } },
          }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 35 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}