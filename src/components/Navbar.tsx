import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import CloudNetworkLogo from "../components/CloudNetworkLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f14]/95 backdrop-blur border-b border-white/10">

      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-14 relative">

          {/* LEFT - Animated AWS Logo */}
          <Link
            to="/"
            onClick={handleHomeClick}
            className="flex items-center gap-2"
          >
            {/* 🔥 REPLACED ICON */}
            <CloudNetworkLogo />

            <span className="text-sm font-medium tracking-tight">
              AWS <span className="text-[#FF9900]">Cloud Club MUJ</span>
            </span>
          </Link>

          {/* CENTER - Hamburger (mobile only) */}
          <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded border border-transparent hover:border-white/10 text-gray-400 hover:text-white transition"
            >
              {isOpen ? (
                <X className="w-4.5 h-4.5" />
              ) : (
                <Menu className="w-4.5 h-4.5" />
              )}
            </button>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-5 text-xs">
            <Link
              to="/"
              onClick={handleHomeClick}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </Link>

            <a
              href="#events"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Events
            </a>
          </div>

          {/* RIGHT - MUJ LOGO */}
          <div className="flex items-center">
            <img
              src="/images/manipalpnglogo.png"
              alt="MUJ Logo"
              className="h-7 w-auto opacity-70 hover:opacity-100 transition duration-200"
            />
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="md:hidden border-t border-white/10 bg-[#0b0f14]"
          >
            <div className="px-4 py-3 flex flex-col gap-3 text-sm">

              <Link
                to="/"
                onClick={() => {
                  setIsOpen(false);
                  handleHomeClick();
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>

              <a
                href="#events"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Events
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}
