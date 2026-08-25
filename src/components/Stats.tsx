"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10+", title: "Years Experience" },
  { value: "100+", title: "Projects" },
  { value: "1000km", title: "Surveyed Routes" },
  { value: "24/7", title: "Project Support" },
];

export default function Stats() {
  return (
    <section className="bg-slate-50 py-24 text-slate-950">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-[24px] border border-slate-200 bg-white p-8 text-center shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <h2 className="text-4xl font-black text-cyan-600 sm:text-5xl">
                {item.value}
              </h2>
              <p className="mt-4 text-sm uppercase tracking-[0.24em] text-slate-400">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
