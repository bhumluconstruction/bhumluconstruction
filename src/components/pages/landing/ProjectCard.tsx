import Link from "next/link";

interface Props {
  eyebrow: string;
  title: string;
  location: string;
  status: string;
  description: string;
  timeline?: string;
  details?: string[];
  image?: string;
  href?: string;
}

export default function ProjectCard({ eyebrow, title, location, status, description, timeline, details, image, href }: Props) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
      <div className="h-64 overflow-hidden bg-slate-100">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full bg-gradient-to-br from-amber-100 via-white to-cyan-100" />
        )}
      </div>
      <div className="p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">
          {eyebrow}
        </p>
        <h3 className="mt-3 text-2xl font-bold text-slate-900">{title}</h3>
        <p className="mt-3 text-slate-700">{location}</p>
        <p className="mt-4 text-slate-700">{description}</p>
        {(timeline || details?.length) ? (
          <div className="mt-6 rounded-[18px] bg-slate-50 p-4 text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">Project highlight</p>
            <p className="mt-2 text-sm leading-6">
              {details?.[0] ?? `Timeline: ${timeline}`}
            </p>
          </div>
        ) : null}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <span className="rounded-sm bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
            {status}
          </span>
          {href ? (
            <Link
              href={href}
              className="rounded-sm bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              View Project
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
