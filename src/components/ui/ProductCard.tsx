"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <div
        className={`relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br ${product.gradient}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.22),transparent_35%)]" />

        <span className="absolute left-6 top-6 text-[10px] tracking-[.25em] text-white/55">
          {product.eyebrow}
        </span>

        <motion.div
          className="absolute inset-0 grid place-items-center text-[110px] font-thin text-white/70"
          whileHover={{ scale: 1.08, rotate: 4 }}
          transition={{ duration: 0.5 }}
        >
          {product.symbol}
        </motion.div>

        <button
          aria-label={`Explore ${product.name}`}
          className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/20 opacity-0 backdrop-blur-xl transition group-hover:opacity-100"
        >
          <ArrowUpRight size={17} />
        </button>

        <div className="absolute inset-x-4 bottom-4 rounded-[20px] border border-white/10 bg-black/35 p-5 backdrop-blur-xl">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs text-white/45">{product.category}</span>
            <span className="text-xs text-[#e1bd8b]">{product.price}</span>
          </div>

          <h3 className="text-lg font-medium">{product.name}</h3>
          <p className="mt-2 text-xs leading-5 text-white/45">
            {product.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}