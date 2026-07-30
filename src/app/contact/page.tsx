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
                <p className="mt-2 text-slate-600">+977-98XXXXXXXX</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Email</h3>
                <p className="mt-2 text-slate-600">info@bhumlu.com</p>
              </div>
            </div>
          </div>

          <form className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-10">
            <div className="grid gap-6">
              <input className="rounded-2xl border border-slate-200 p-4 outline-none ring-0 focus:border-amber-500" placeholder="Full Name" />
              <input className="rounded-2xl border border-slate-200 p-4 outline-none focus:border-amber-500" placeholder="Phone Number" />
              <input className="rounded-2xl border border-slate-200 p-4 outline-none focus:border-amber-500" placeholder="Email Address" />
              <textarea rows={6} className="rounded-2xl border border-slate-200 p-4 outline-none focus:border-amber-500" placeholder="Tell us about your project..." />
              <button className="rounded-sm bg-amber-500 py-4 font-bold text-slate-950 transition hover:bg-amber-400">
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
