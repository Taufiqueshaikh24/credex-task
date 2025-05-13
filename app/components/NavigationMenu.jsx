"use client"; 
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const NavigationMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'How It Works', href: '#how' },
    { label: 'Why Choose Us', href: '#why' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center px-8">
              <Image
                src="/newLogo.png"        
                alt="Soft Sell Logo"
                width={140}             
                height={40}             
                className="object-contain"
              />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-400 hover:text-green-600 transition font-medium text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-blue-600 transition font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavigationMenu;
