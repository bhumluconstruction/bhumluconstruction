import React from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  projectType: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Prakash Shrestha",
    role: "VP of Real Estate",
    company: "Apex Commercial Group",
    projectType: "Commercial High-Rise",
    quote:
      "Delivered our 12-story commercial hub two weeks ahead of schedule. Their structural engineering team solved soil stability issues that three other firms walked away from.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sunita Gurung",
    role: "Director of Facilities",
    company: "Vanguard Logistics",
    projectType: "Industrial Warehouse Hub",
    quote:
      "Unmatched safety protocols and transparent cost modeling. Zero budget overruns on a $14M build—that's unheard of in modern industrial construction.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rajesh & Anita Thapa",
    role: "Property Developers",
    company: "Horizon Estates",
    projectType: "Luxury Multi-Family Housing",
    quote:
      "The craftsmanship in the finishing phase was exceptional. Their site management team kept the entire surrounding neighborhood informed and respected.",
    rating: 5,
  },
  {
    id: 4,
    name: "Bikash Karki",
    role: "Chief Operations Officer",
    company: "Sterling Holdings",
    projectType: "Corporate HQ Retrofit",
    quote:
      "Transformed an outdated 1980s complex into an A-grade green energy building. Precision planning down to the exact hour.",
    rating: 5,
  },
];

export const TestimonialCarousel = () => {
  // Duplicate list to ensure seamless looping transition
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-slate-900 py-20 text-white overflow-hidden relative">
      {/* Background Subtle Accent Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />

      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10 text-center">
        <span className="text-amber-500 font-semibold uppercase tracking-widest text-xs">
          Client Feedback
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 text-slate-100 tracking-tight">
          Built on Trust & Precision
        </h2>
        <p className="text-slate-400 mt-3 max-w-2xl mx-auto text-base">
          Hear directly from real estate developers, facility heads, and
          enterprise clients who count on us for heavy construction execution.
        </p>
      </div>

      {/* Infinite Carousel Container */}
      {/* Mobile: fixed-height vertical strip that scrolls top-to-bottom */}
      {/* Desktop (md+): full-width horizontal strip that scrolls left-to-right */}
      <div className="relative flex w-full h-[620px] md:h-auto overflow-hidden group">
        {/* Top/Bottom fades on mobile, Left/Right fades on desktop */}
        <div className="absolute left-0 right-0 top-0 h-20 md:h-full md:w-48 md:right-auto bg-gradient-to-b md:bg-gradient-to-r from-slate-900 to-transparent z-20 pointer-events-none" />
        <div className="absolute left-0 right-0 bottom-0 h-20 md:h-full md:w-48 md:left-auto bg-gradient-to-t md:bg-gradient-to-l from-slate-900 to-transparent z-20 pointer-events-none" />

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 animate-marquee-vertical md:animate-marquee-horizontal group-hover:[animation-play-state:paused] w-full md:min-w-full flex-shrink-0">
          {doubledTestimonials.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-full h-[280px] md:h-auto md:w-[420px] md:min-w-[240px] md:max-w-[420px] bg-slate-800/80 backdrop-blur-md border border-slate-700/60 rounded-xl p-6 md:p-8 flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 shadow-xl flex-shrink-0"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 stroke-none"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20 uppercase">
                    {item.projectType}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-slate-600 mb-2 rotate-180 opacity-50" />
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 italic line-clamp-4 md:line-clamp-none">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/50 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-100 text-base">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {item.role} •{" "}
                    <span className="text-slate-300">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
