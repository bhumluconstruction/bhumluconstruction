import PageBanner from "@/components/PageBanner";
import ServiceCard from "@/components/pages/landing/ServiceCard";
import { servicesData } from "@/lib/constants/data";

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Services"
        subtitle="What We Do"
        description="A practical service lineup that covers field survey and construction execution for transmission lines."
      />

      <section className="section bg-[#f7efe2] py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.title}
                eyebrow={service.eyebrow}
                title={service.title}
                description={service.description}
                overview={service.overview}
                features={service.features}
                image={service.image}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
