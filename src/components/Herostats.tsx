"use client";

import { motion } from "framer-motion";
import { statsData } from "@/lib/constants/data";

export default function HeroStats() {
  return (
    <section className="relative z-10 mt-12 lg:mt-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)] md:grid-cols-4 md:divide-x md:divide-slate-200 divide-y divide-slate-200"
        >
          {statsData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="p-8 text-center"
            >
              <motion.h2
                className="text-4xl font-black text-amber-500 sm:text-5xl"
                whileHover={{ scale: 1.04, y: -3 }}
              >
                {item.value}
              </motion.h2>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
                {item.title}
              </p>
              <p className="mt-2 text-sm text-slate-500">{item.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
