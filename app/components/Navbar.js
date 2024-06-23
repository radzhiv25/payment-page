"use client"
import { useState } from 'react';
import NavItems from './NavItems';

const NavLink = ({ href, children, className = '' }) => (
  <a href={href} className={`text-gray-800 hover:text-gray-600 ${className}`}>
    {children}
  </a>
);

const MenuIcon = ({ isOpen }) => (
  <div className="size-6 flex flex-col justify-between items-center">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className={`w-full h-1 rounded bg-gray-600 transition-all duration-300 ${
          isOpen
            ? i === 0
              ? 'rotate-45 translate-y-2.5'
              : i === 2
              ? '-rotate-45 -translate-y-2.5'
              : 'opacity-0'
            : ''
        }`}
      />
    ))}
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#', text: 'Talk to Lawyer/CA', className: 'border border-[#1B72B1] px-3 py-2 rounded-md' },
    { href: '#', text: <NavItems /> },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="sm:px-6 lg:px-8 px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-5">
            <a href="/" className="lg:text-xl ">Product</a>
            <a href="/" className="lg:text-xl ">Pricing</a>
            <a href="/" className="lg:text-xl ">Customers</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 ">
            {navItems.map((item, index) => (
              <NavLink key={index} href={item.href} className={item.className}>
                {item.text}
              </NavLink>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
              <MenuIcon isOpen={isMenuOpen} />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item, index) => (
            <NavLink key={index} href={item.href} className={`block py-2 ${item.className}`}>
              {item.text}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;