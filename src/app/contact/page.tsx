import PageBanner from "@/components/PageBanner";

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Let’s Talk"
        description="Tell us about your route, terrain and schedule and we’ll help plan the next step."
      />

      <section className="section bg-[#f7efe2] py-24">
        <div className="container grid gap-20 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact Information */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
              Get in touch
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Start the conversation.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Ready to start your transmission line project? Contact our
              engineering team today.
            </p>

            <div className="mt-10 space-y-8 rounded-[24px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div>
                <h3 className="font-bold text-slate-900">Office</h3>
                <p className="mt-2 text-slate-600">Kathmandu, Nepal</p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">Phone</h3>
                <p className="mt-2 text-slate-600">+977-9865591950</p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">Email</h3>
                <p className="mt-2 text-slate-600">
                  bhumluconstruction@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Google Form */}
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSchrpFPDzBnFmDmqCXuL2n7DwCd6B0PQCi1g2Gp1ySByYjzcg/viewform?embedded=true"
              width="100%"
              height="850"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Contact Form"
              className="w-full"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </>
  );
}
