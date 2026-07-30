import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[radial-gradient(circle_at_top_left,rgba(242,167,27,0.16),transparent_33%),linear-gradient(135deg,#ffffff_0%,#f8fafc_60%,#e2e8f0_100%)] py-24 text-slate-950">
      <div className="container text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
          Ready to build?
        </p>
        <h2 className="mt-5 text-4xl font-black sm:text-5xl lg:text-6xl">
          Let’s discuss your next line.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-700">
          Share your route, terrain and deadline and we’ll map the next steps for
          survey, construction and delivery.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-flex rounded-sm bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-400"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
