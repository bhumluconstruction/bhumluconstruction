"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiChevronDown, HiMenuAlt3, HiX } from "react-icons/hi";
import { navItems } from "@/lib/constants/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <header
      ref={navRef}
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200 bg-white/95 shadow-sm backdrop-blur"
          : "border-transparent bg-white/90"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 text-sm font-black text-slate-950">
            B
          </div>
          <div className="leading-none">
            <span className="block text-lg font-black tracking-[0.24em] text-slate-950">
              BHUMLU
            </span>
            <span className="block text-[10px] uppercase tracking-[0.35em] text-amber-600">
              Construction
            </span>
          </div>
        </Link>

        <nav className="hidden gap-8 lg:flex">
          {navItems.map((link) => (
            <div key={link.id} className="relative">
              {link.children ? (
                <button
                  type="button"
                  onClick={() =>
                    setActiveDropdown((current) => (current === link.id ? null : link.id))
                  }
                  className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.08em] text-slate-700 transition hover:text-cyan-600"
                >
                  {link.title}
                  <HiChevronDown
                    className={`h-4 w-4 transition ${
                      activeDropdown === link.id ? "text-cyan-600 rotate-180" : "text-slate-700"
                    }`}
                  />
                </button>
              ) : (
                <Link
                  href={link.url}
                  className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.08em] text-slate-700 transition hover:text-cyan-600"
                >
                  {link.title}
                </Link>
              )}

              {link.children ? (
                <div
                  className={`absolute left-0 top-full z-30 mt-3 min-w-[180px] rounded-[18px] border border-slate-200 bg-white p-3 shadow-xl transition duration-200 ${
                    activeDropdown === link.id ? "block" : "hidden"
                  }`}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.url}
                      href={child.url}
                      className="block rounded-[12px] px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-cyan-600"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-sm border border-cyan-200 bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-400 lg:block"
        >
          Get Quote
        </Link>

        <button
          className="rounded-full border border-slate-200 bg-white p-2 text-slate-700 lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white/95 px-6 py-5 lg:hidden">
          {navItems.map((link) => (
            <div key={link.id} className="border-b border-slate-200 py-4 last:border-b-0">
              <Link
                href={link.url}
                className="block text-sm font-medium tracking-[0.16em] text-slate-700"
                onClick={() => setOpen(false)}
              >
                {link.title}
              </Link>
              {link.children ? (
                <div className="mt-3 space-y-2 pl-4">
                  {link.children.map((child) => (
                    <Link
                      key={child.url}
                      href={child.url}
                      className="block text-sm text-slate-600 transition hover:text-cyan-600"
                      onClick={() => setOpen(false)}
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
