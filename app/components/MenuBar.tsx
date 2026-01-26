"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MenuBar = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Characters", href: "/characters" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-[#0b0a0d]/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <Link
            href="/"
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
            <span className="font-medium text-[#f7e9cf] font-[family:var(--font-display)] text-lg">
              Project Vectus
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-white/10 text-[#f2c37b] shadow-sm"
                        : "text-white/70 hover:text-white/90 hover:bg-white/5"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
