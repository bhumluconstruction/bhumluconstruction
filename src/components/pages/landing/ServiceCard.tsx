import Link from "next/link";

interface Props {
  eyebrow: string;
  title: string;
  description: string;
  overview?: string;
  features?: string[];
  image?: string;
  href: string;
}

export default function ServiceCard({ eyebrow, title, description, overview, features, image, href }: Props) {
  return (
    <div className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
      {image ? (
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-64 w-full object-cover transition duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
        </div>
      ) : null}

      <div className="p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
          {eyebrow}
        </p>
        <h3 className="mt-4 text-3xl font-black text-slate-950">{title}</h3>
        <p className="mt-4 text-base leading-7 text-slate-700">{description}</p>
        {overview ? <p className="mt-4 text-slate-700">{overview}</p> : null}
        {features ? (
          <ul className="mt-6 space-y-3 text-slate-700">
            {features.map((feature) => (
              <li key={feature} className="before:content-['•'] before:text-amber-300 before:mr-2 before:font-bold">
                {feature}
              </li>
            ))}
          </ul>
        ) : null}
        <Link
          href={href}
          className="mt-8 inline-flex rounded-sm bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
