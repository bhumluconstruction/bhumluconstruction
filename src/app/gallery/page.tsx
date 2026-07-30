import PageBanner from "@/components/PageBanner";
import { galleryData } from "@/lib/constants/data";

export default function GalleryPage() {
  return (
    <section>
      <PageBanner
        title="Gallery"
        subtitle="Field Photos"
        description="A gallery space ready for real survey, tower and construction imagery."
      />

      <section className="section bg-[#f7efe2] py-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryData.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-80 w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="border-t border-slate-100 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm text-slate-600">Field and survey imagery that supports route planning, construction and commissioning.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
