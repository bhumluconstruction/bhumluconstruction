interface Props {
  title: string;
  subtitle: string;
}

export default function Banner({ title, subtitle }: Props) {
  return (
    <section className="bg-gradient-to-r from-amber-100 via-white to-cyan-100 py-32 text-slate-950">
      <div className="container">
        <p className="uppercase tracking-[6px] text-slate-500">{subtitle}</p>

        <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold">{title}</h1>
      </div>
    </section>
  );
}
