interface BannerProps {
  title: string;
  subtitle: string;
  description?: string;
}

export default function PageBanner({
  title,
  subtitle,
  description,
}: BannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-amber-50 via-white to-cyan-50 py-36 text-slate-950">
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:80px_80px]" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-amber-200/50 blur-[120px]" />

      <div className="container relative">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
          {subtitle}
        </p>
        <h1 className="mt-6 text-4xl font-black sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg text-slate-700">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
