import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";

const items = [
  {
    title: "Route Alignment",
    description: "Route corridor planning that balances terrain, access and future reliability.",
    image: "/Gallery/image(1).jpg",
  },
  {
    title: "Topographic Survey",
    description: "High-precision terrain mapping for profile drawing and construction planning.",
    image: "/Gallery/image (2).jpg",
  },
  {
    title: "Profile Drawing",
    description: "Detailed profile and cross-section deliverables for slope and span design.",
    image: "/Gallery/image (4).jpg",
  },
  {
    title: "Tower Spotting",
    description: "Optimal tower locations based on terrain, soil and accessibility.",
    image: "/Gallery/image (3).jpg",
  },
  {
    title: "GIS Mapping",
    description: "Digital corridor deliverables for planning, approvals and site mobilization.",
    image: "/Gallery/image (5).jpg",
  },
  {
    title: "Land Coordination",
    description: "Stakeholder coordination and alignment approval support in the field.",
    image: "/Gallery/image (6).jpg",
  },
];

export default function SurveyPage() {
  return (
    <>
      <PageBanner
        title="Transmission Line Survey"
        subtitle="Our Expertise"
        description="A practical survey service set designed for route planning, profile development and line optimization."
      />

      <section className="section bg-[#f7efe2] py-24">
        <div className="container">
          <div className="mb-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-4xl font-black sm:text-5xl">
                Survey Services
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Our survey team delivers corridor alignment, tower spotting and
                terrain analysis for every transmission line project.
              </p>
              <p className="mt-6 text-slate-700">
                We combine field reconnaissance with digital mapping to produce
                reliable survey data that reduces rework and supports
                construction planning.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex border bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Discuss Survey
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                <Image
                  src="/Gallery/image (2).jpg"
                  alt="Foundation work"
                  width={840}
                  height={540}
                  className="h-72 w-full object-cover transition duration-500 ease-out hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                <Image
                  src="/Gallery/image (3).jpg"
                  alt="Road access"
                  width={840}
                  height={540}
                  className="h-72 w-full object-cover transition duration-500 ease-out hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 ease-out hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">
                    Survey
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-slate-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
