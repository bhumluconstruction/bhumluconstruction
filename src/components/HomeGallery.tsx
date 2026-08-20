"use client";

import { motion } from "framer-motion";
import { galleryData, galleryDatas } from "@/lib/constants/data";

const images = [1, 2, 3, 4, 5, 6];

export default function HomeGallery() {
  return (
    <section className="section bg-slate-100 py-24">
      <div className="container">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
              Field log
            </p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              Project Gallery
            </h2>
          </div>
          <p className="max-w-xl text-lg text-slate-700">
            Survey stations, tower foundations and line-ready terrain captured in
            a format that is ready for real project photography.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryDatas.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-80 w-full object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
              />
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
