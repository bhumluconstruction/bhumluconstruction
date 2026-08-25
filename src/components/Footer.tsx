import Link from "next/link";
import { footerSections } from "@/lib/constants/data";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-900">
      <div className="container py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-3xl font-black text-amber-600"><Image src="/Logo/logo.png" alt="Company Logo" width={100} height={50} />Construction</h2>

            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Professional transmission line surveying, route planning and
              construction support across Nepal’s toughest terrain.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-slate-700">
                {section.title}
              </h3>

              <ul className="space-y-3 text-sm text-slate-600">
                {section.itemsmenu.map((item) => (
                  <li key={item.item}>{item.item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          © 2026 Bhumlu Construction. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
