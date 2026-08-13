import PageBanner from "@/components/PageBanner";

import { Compass, ShieldCheck, Target } from "lucide-react";
import { Founders } from "@/components/Founders";

const aboutValues = [
  {
    title: "Vision",
    description:
      "To make Nepal’s power grid more reliable by delivering transmission line work that is precise, resilient and ready for future expansion.",
    icon: Target,
  },
  {
    title: "Mission",
    description:
      "To unite surveying discipline, engineering know-how and local execution so every line is delivered safely, on time and on budget.",
    icon: Compass,
  },
  {
    title: "Values",
    description:
      "We build with integrity, respect the land and communities, and place safety and quality at the center of every project.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Who We Are"
        description="Bhumlu Construction brings survey discipline, civil execution and field experience together for dependable transmission work in Nepal."
      />

      <section className="section bg-[#f7efe2] py-24">
        <div className="container flex flex-col gap-16 lg:flex-row lg:items-stretch">
          <div className="flex-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
              Our approach
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Building reliable transmission infrastructure.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Bhumlu Construction specializes in transmission line surveying,
              planning, foundation construction, tower erection and complete EPC
              support.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Our experienced engineers and field teams work across Nepal’s
              diverse terrain, delivering safe and efficient power
              infrastructure with full attention to site conditions.
            </p>
            <div className="flex flex-col gap-6 mt-10 mb-10 lg:flex-row lg:items-center lg:gap-8">
              <div className="flex flex-1 gap-6 grid-cols-3 lg:grid">
                {aboutValues.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                    >
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-amber-100 text-amber-700">
                        <Icon className="h-6 w-6" />
                      </div>
                      <p className="mt-5 text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">
                        {item.title}
                      </p>
                      <p className="mt-4 text-slate-700">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-1 rounded-[32px] border border-slate-200 bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.08)] lg:p-3">
              <Founders />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
