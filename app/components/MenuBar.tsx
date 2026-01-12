'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuBar = () => {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Characters', href: '/characters' },
  ];

  return (
    <nav className="relative z-50 w-full border-b border-white/10 bg-[#0b0a0d]/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 transition-opacity hover:opacity-80"
          >
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#f2c37b] to-[#d4a459] flex items-center justify-center">
              <span className="text-[#0b0a0d] font-bold text-sm">V</span>
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
                        ? 'bg-white/10 text-[#f2c37b] shadow-sm'
                        : 'text-white/70 hover:text-white/90 hover:bg-white/5'
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