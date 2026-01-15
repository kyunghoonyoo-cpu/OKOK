
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const navLinks = [
    { name: '홈', href: '#hero' },
    { name: '소개', href: '#about' },
    { name: '기술', href: '#skills' },
    { name: '경력', href: '#experience' },
    { name: '연락처', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className={`text-2xl font-bold tracking-tight transition-colors ${
          scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'
        }`}>
          YKH <span className="text-teal-600">.</span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-teal-500 ${
                scrolled ? 'text-slate-600' : 'text-slate-600 md:text-slate-200'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon (Simplified for this version) */}
        <div className="md:hidden">
          <button className={scrolled ? 'text-slate-900' : 'text-slate-900'}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
