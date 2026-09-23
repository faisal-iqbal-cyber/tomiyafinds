"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const CardContent = (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <div
        className={`relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br ${product.gradient}`}
      >
        {/* Ambient glow for placeholder cards */}
        {!product.image && (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.22),transparent_35%)]" />
        )}

        {/* Product image / placeholder symbol */}
        {product.image ? (
          <motion.img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        ) : (
          <motion.div
            className="absolute inset-0 grid place-items-center text-[110px] font-thin text-white/70"
            whileHover={{ scale: 1.08, rotate: 4 }}
            transition={{ duration: 0.5 }}
          >
            {product.symbol}
          </motion.div>
        )}

        {/* Image readability overlay */}
        {product.image && (
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/5 to-black/25" />
        )}

        {/* Eyebrow */}
        <span className="absolute left-5 top-5 z-20 rounded-full border border-white/15 bg-black/35 px-3 py-2 text-[9px] tracking-[.22em] text-white/80 backdrop-blur-md">
          {product.eyebrow}
        </span>

        {/* Arrow */}
        <div className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/35 opacity-0 backdrop-blur-xl transition duration-300 group-hover:opacity-100">
          <ArrowUpRight size={17} />
        </div>

        {/* Product information */}
        <div className="absolute inset-x-4 bottom-4 z-20 rounded-[20px] border border-white/10 bg-black/45 p-5 shadow-2xl backdrop-blur-xl">
          <div className="mb-2 flex items-center justify-between gap-3">
            <span className="text-xs text-white/50">
              {product.category}
            </span>

            <span className="flex items-center gap-1 text-xs text-[#e1bd8b]">
              {product.price}

              {product.affiliateUrl && (
                <ArrowUpRight size={12} />
              )}
            </span>
          </div>

          <h3 className="text-lg font-medium text-white">
            {product.name}
          </h3>

          <p className="mt-2 text-xs leading-5 text-white/50">
            {product.description}
          </p>
        </div>
      </div>
    </motion.article>
  );

  if (product.affiliateUrl) {
    return (
      <a
        href={product.affiliateUrl}
        target="_blank"
        rel="sponsored noopener noreferrer"
        aria-label={`View ${product.name} on Amazon`}
        className="block"
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
}