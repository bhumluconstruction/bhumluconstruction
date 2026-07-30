import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";

const items = [
  {
    title: "Tower Foundations",
    description: "Design and build tower pads that suit steep slopes and soil conditions.",
    image: "/Gallery/image2.png",
  },
  {
    title: "Access Road Planning",
    description: "Safe and efficient site access routes for heavy equipment and material delivery.",
    image: "/Gallery/image3.png",
  },
  {
    title: "Conductor Stringing",
    description: "Precise stringing operations with tension control and safety checks.",
    image: "/Gallery/image4.png",
  },
  {
    title: "Erection Safety",
    description: "Tower erection protocols that protect teams and reduce schedule risk.",
    image: "/Gallery/image5.png",
  },
  {
    title: "Commissioning Support",
    description: "Testing, inspection and handover support to bring lines safely online.",
    image: "/Gallery/image.png",
  },
  {
    title: "Field Coordination",
    description: "Cross-team coordination between survey, civil and electrical execution.",
    image: "/Gallery/image1.png",
  },
];

export default function ConstructionPage() {
  return (
    <>
      <PageBanner
        title="Transmission Line Construction"
        subtitle="Built to Last"
        description="Construction services that turn survey data into durable tower lines and safe transmission corridors."
      />

      <section className="section bg-[#f7efe2] py-24">
        <div className="container">
          <div className="mb-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-4xl font-black sm:text-5xl">Construction Services</h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                We provide complete transmission line construction from foundation works to stringing, testing and commissioning.
              </p>
              <p className="mt-6 text-slate-700">
                Our team manages terrain, logistics and civil works so towers are built with quality and the line is ready for reliable energy delivery.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-sm bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Discuss Construction
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                <Image src="/Gallery/image2.png" alt="Foundation work" width={840} height={540} className="h-72 w-full object-cover transition duration-500 ease-out hover:scale-105" />
              </div>
              <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                <Image src="/Gallery/image3.png" alt="Road access" width={840} height={540} className="h-72 w-full object-cover transition duration-500 ease-out hover:scale-105" />
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
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">Construction</p>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900">{item.title}</h3>
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
