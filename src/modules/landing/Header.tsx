import { useState, useEffect, useRef } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-transparent flex items-center justify-between px-4 sm:px-8 py-6 relative">
      <div className="flex items-center gap-8">
        <div className="text-2xl font-bold gradient-logo">EcoRally</div>
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            <li className="text-gray-400 hover:text-white transition-colors">
              <a href="">Mission</a>
            </li>
            <li className="text-gray-400 hover:text-white transition-colors">
              <a href="">How it works</a>
            </li>
            <li className="text-gray-400 hover:text-white transition-colors">
              <a href="">Features</a>
            </li>
            <li className="text-gray-400 hover:text-white transition-colors">
              <a href="">Join Us</a>
            </li>
          </ul>
        </nav>
      </div>
      <button
        className="md:hidden z-20"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div
          className={`w-6 h-0.5 bg-white mb-1.5 transition-transform ${
            isMenuOpen && "invisible"
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white mb-1.5 ${isMenuOpen && "invisible"}`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-transform ${
            isMenuOpen && "invisible"
          }`}
        ></div>
      </button>
      <nav
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-[#131313b3] backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-10 py-10 px-6 overflow-y-auto`}
      >
        <ul className="flex flex-col gap-6">
          <li className="text-gray-400 hover:text-white transition-colors">
            <a href="" onClick={toggleMenu}>
              Mission
            </a>
          </li>
          <li className="text-gray-400 hover:text-white transition-colors">
            <a href="" onClick={toggleMenu}>
              How it works
            </a>
          </li>
          <li className="text-gray-400 hover:text-white transition-colors">
            <a href="" onClick={toggleMenu}>
              Features
            </a>
          </li>
          <li className="text-gray-400 hover:text-white transition-colors">
            <a href="" onClick={toggleMenu}>
              Join Us
            </a>
          </li>
        </ul>
      </nav>
      <button className="hidden md:block px-4 py-2 bg-blue-400 text-white cursor-pointer rounded-lg">
        Get Started
      </button>
    </header>
  );
};
