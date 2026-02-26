import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "home",
    "about",
    "education",
    "skills",
    "experience",
    "portfolio",
    "contact",
  ];

  return (
    <nav className="bg-black/70 fixed top-0 left-0 right-0 z-10 backdrop-blur-sm flex justify-between items-center px-6 py-3">
      {/* Logo / Name */}
      <a className="font-display text-lg sm:text-xl text-white" href="#hero">
        Mpho Tshawe Maudu
      </a>

      {/* Hamburger button (visible only on mobile) */}
      <button
        className="sm:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Desktop nav */}
      <ul className="hidden sm:flex space-x-6">
        {navItems.map((name) => (
          <li key={name}>
            <a
              href={`#${name}`}
              className="text-base sm:text-lg font-medium text-white hover:underline underline-offset-4"
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-black/90 flex flex-col items-center space-y-4 py-4 sm:hidden">
          {navItems.map((name) => (
            <li key={name}>
              <a
                href={`#${name}`}
                className="text-lg font-medium text-white hover:underline underline-offset-4"
                onClick={() => setIsOpen(false)} // close menu after click
              >
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
