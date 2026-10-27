"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MenuBar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Author", href: "/author" },
    // { label: "Blog", href: "/blog" },
    { label: "Characters", href: "/characters" },
    { label: "The Circle", href: "/circle" },
    { label: "Ascentive", href: "/ascentive" },
    { label: "Become an ARC reader", href: "/arc" },
    // { label: "Get Newsletter", href: "/newsletter" },
  ];

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const isItemActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-[#0b0a0d]/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center space-x-3 transition-opacity hover:opacity-80"
          >
            <div className="h-8 w-8 flex items-center justify-center">
              <Image
                src="/HedronLogoArrowSm.png"
                alt="Project Vectus Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="font-(--font-display) text-lg font-medium text-[#f7e9cf]">
              Project Vectus
            </span>
          </Link>

          {/* Navigation Links (desktop) */}
          <div className="hidden items-center space-x-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                    px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${
                      isItemActive(item.href)
                        ? "bg-white/10 text-[#f2c37b] shadow-sm"
                        : "text-white/70 hover:text-white/90 hover:bg-white/5"
                    }
                  `}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Menu toggle (mobile) */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/5 hover:text-white lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown panel (mobile) */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-[#0b0a0d]/95 lg:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`
                    rounded-lg px-4 py-3 text-base font-medium transition-colors
                    ${
                      isItemActive(item.href)
                        ? "bg-white/10 text-[#f2c37b]"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    }
                  `}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default MenuBar;
