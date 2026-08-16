"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { heroHighlights, marqueeWords } from "@/lib/constants/data";
import TransmissionLines from "@/components/animations/TransmissionLines";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-50 pt-24 text-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.18),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.16),transparent_30%),linear-gradient(120deg,#f8fafc_0%,#e2e8f0_45%,#cbd5e1_100%)]" />
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:60px_60px]" />

      <svg className="absolute bottom-0 w-full" viewBox="0 0 1600 520" aria-hidden="true">
        <path fill="#e2e8f0" d="M0 400L170 280L360 340L560 220L780 330L990 180L1200 300L1450 180L1600 250V520H0Z" />
        <path fill="#cbd5e1" d="M0 450L220 330L430 395L670 280L900 380L1160 250L1600 410V520H0Z" />
        <path fill="#f8fafc" d="M0 480L180 365L400 430L620 320L820 410L1040 290L1350 370L1600 320V520H0Z" />
      </svg>

      <TransmissionLines responsive accent tower towerCount={1} towerScaleLarge={2.6} seed={Math.floor(Math.random() * 100000)} />

      <motion.div
        className="absolute left-0 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-amber-400/20 blur-[100px]"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-100/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
            Transmission Line Survey & Construction · Nepal
          </span>

          <h1 className="mt-8 text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl">
            We survey the route.
            <span className="mt-3 block text-cyan-600">We build the line.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
            Bhumlu Construction plans, surveys and delivers high-voltage
            transmission line works across Nepal’s demanding hill and mountain
            terrain.
          </p>

          <div className="mt-6 text-sm uppercase tracking-[0.30em] text-amber-300">
            New constant movement — part one of the route, survey and line delivery.
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className=" bg-yellow-500 border border-slate-950 px-8 py-4 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-yellow-400"
            >
              Consult Now
            </Link>
            <Link
              href="/projects"
              className="border border-slate-950 bg-white/90 px-8 py-4 font-semibold text-slate-950 backdrop-blur transition hover:border-yellow-400/50 hover:text-yellow-600"
            >
              View Projects
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 border-t border-slate-200 pt-6 text-sm text-slate-700">
            {heroHighlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + index * 0.12, duration: 0.45 }}
              >
                <span className="mb-2 block text-xs uppercase tracking-[0.24em] text-cyan-600">
                  {item.label}
                </span>
                {item.value}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 bg-yellow-500 left-0 right-0 z-20 overflow-hidden border-t border-slate-200  py-3 backdrop-blur-sm">
        <motion.div
          className="flex w-max gap-8 whitespace-nowrap px-4 text-sm font-medium uppercase tracking-[0.3em] text-slate-700"
          animate={{ x: [0, -((marqueeWords.length * 180) / 2)] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          {marqueeWords.concat(marqueeWords).map((word, index) => (
            <span key={`${word}-${index}`} className="flex items-center gap-8">
              {word}
              <span className="text-cyan-600">●</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
