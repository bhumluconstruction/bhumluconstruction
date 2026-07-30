"use client";

import { motion } from "framer-motion";
import { servicesData } from "@/lib/constants/data";
import ServiceCard from "./ServiceCard";

export default function HomeServices() {
  return (
    <section className="section bg-slate-50 py-24 text-slate-950">
      <div className="container">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            What we do
          </p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Two disciplines. One line, start to finish.
          </h2>
          <p className="mt-5 text-lg text-slate-700">
            From corridor planning to commissioning, we keep survey and
            construction under the same roof for a cleaner delivery chain.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
            >
              <ServiceCard
                eyebrow={service.eyebrow}
                title={service.title}
                description={service.description}
                overview={service.overview}
                features={service.features}
                image={service.image}
                href={service.href}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
