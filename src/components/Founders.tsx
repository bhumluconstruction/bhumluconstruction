import React from "react";
import { ShieldCheck, HardHat, Compass, Award } from "lucide-react";

export const Founders = () => {
  return (
    <section className="w-full bg-slate-50 py-5 px-3 text-slate-900">
      <div className="mx-auto w-full max-w-full px-3">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-200/80 rounded-md text-slate-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <HardHat className="w-4 h-4 text-amber-600" />
            Leadership & Values
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Engineered by Experience. <br />
            <span className="text-amber-600">Driven by Integrity.</span>
          </h2>
          <p className="text-slate-600 mt-4 text-base md:text-lg leading-relaxed">
            Founded in 2008, our company was built on a simple promise: combine
            unyielding structural standards with total financial transparency.
            Meets the minds guiding every foundation we pour.
          </p>
        </div>

        {/* Dual Founders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Founder 1 */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=250"
                  alt="Arthur Vance"
                  className="w-20 h-20 rounded-full object-cover border-2 border-amber-500 shadow-md"
                />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Arthur Vance, PE
                  </h3>
                  <p className="text-amber-600 font-medium text-sm">
                    Co-Founder & Chief Structural Engineer
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    25+ Years Industrial Infrastructure
                  </p>
                </div>
              </div>

              <blockquote className="text-slate-700 text-base md:text-lg leading-relaxed italic border-l-4 border-amber-500 pl-4 mb-6 bg-slate-50 py-3 rounded-r-md">
                "We don't cut corners on steel, and we certainly don't cut
                corners on safety. When your name is on the beam, every
                millimeter matters."
              </blockquote>

              <p className="text-slate-600 text-sm leading-relaxed">
                Arthur oversees master planning, structural integrity, and
                engineering quality assurance across all major commercial and
                municipal builds. Prior to co-founding the firm, he served as
                Lead Structural Consultant for regional transit infrastructure
                projects.
              </p>
            </div>

            <div className="bg-slate-900 text-slate-300 px-8 py-5 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-slate-400">
                <Compass className="w-4 h-4 text-amber-500" /> Focus:
                Engineering & Safety
              </div>
              <span className="font-serif text-lg tracking-widest text-slate-400 italic">
                A. Vance
              </span>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250"
                  alt="Helena Ross"
                  className="w-20 h-20 rounded-full object-cover border-2 border-slate-900 shadow-md"
                />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Helena Ross
                  </h3>
                  <p className="text-slate-800 font-medium text-sm">
                    Co-Founder & Chief Operations Officer
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Commercial Real Estate & Operations Strategy
                  </p>
                </div>
              </div>

              <blockquote className="text-slate-700 text-base md:text-lg leading-relaxed italic border-l-4 border-slate-900 pl-4 mb-6 bg-slate-50 py-3 rounded-r-md">
                "Great construction isn't just about heavy machinery—it's about
                predictability, scheduling rigor, and protecting our partners'
                bottom lines."
              </blockquote>

              <p className="text-slate-600 text-sm leading-relaxed">
                Helena leads site procurement, contractor management, vendor
                partnerships, and financial execution. Under her operational
                leadership, the firm has maintained a 98% on-time completion
                record across more than 140 major developments.
              </p>
            </div>

            <div className="bg-slate-900 text-slate-300 px-8 py-5 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-slate-400">
                <ShieldCheck className="w-4 h-4 text-amber-500" /> Focus:
                Operations & Cost Control
              </div>
              <span className="font-serif text-lg tracking-widest text-slate-400 italic">
                H. Ross
              </span>
            </div>
          </div>
        </div>

        {/* Company Stats Bar */}
        <div className="mt-16 bg-white border border-slate-200 rounded-xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-sm">
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-slate-900">
              $450M+
            </div>
            <div className="text-xs md:text-sm text-slate-500 font-medium mt-1">
              Completed Project Value
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-slate-900">
              18+
            </div>
            <div className="text-xs md:text-sm text-slate-500 font-medium mt-1">
              Years in Industry
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-slate-900">
              140+
            </div>
            <div className="text-xs md:text-sm text-slate-500 font-medium mt-1">
              Commercial Structures
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-slate-900">
              0
            </div>
            <div className="text-xs md:text-sm text-slate-500 font-medium mt-1">
              Lost-Time Safety Incidents (3 Yrs)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
