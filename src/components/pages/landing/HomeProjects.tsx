"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/lib/constants/data";
import ProjectCard from "./ProjectCard";

export default function HomeProjects() {
  return (
    <section className="section bg-[#f7efe2] py-24">
      <div className="container">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
              Selected work
            </p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              Featured Projects
            </h2>
          </div>
          <p className="max-w-xl text-lg text-slate-700">
            Real transmission line projects from survey through construction,
            showing route strategy, foundation readiness, and commissioning focus.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
            >
              <ProjectCard
                eyebrow={project.eyebrow}
                title={project.title}
                location={project.location}
                status={project.status}
                description={project.description}
                timeline={project.timeline}
                details={project.details}
                image={project.image}
                href={project.href}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
