import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '#events' },
  ];

  // 🔥 Scroll to top function
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050816]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            onClick={handleHomeClick}
            className="flex items-center space-x-3 group"
          >
            <div className="w-11 h-11 p-[2px] rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500">
              <div className="w-full h-full rounded-xl overflow-hidden bg-[#050816] flex items-center justify-center">
                <img
                  src="/images/cloud-logo.svg"
                  alt="AWS Cloud Club Logo"
                  className="w-full h-full object-cover scale-[1.45]"
                />
              </div>
            </div>

            <span className="text-xl font-bold tracking-tight">
              AWS <span className="text-indigo-400">Cloud Club MUJ</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.path === '/' ? (
                <Link
                  key={link.name}
                  to="/"
                  onClick={handleHomeClick} // ✅ FIX
                  className="text-gray-300 hover:text-indigo-400 transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-gray-300 hover:text-indigo-400 transition-colors font-medium"
                >
                  {link.name}
                </a>
              )
            )}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-indigo-400 transition"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050816]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) =>
                link.path === '/' ? (
                  <Link
                    key={link.name}
                    to="/"
                    onClick={() => {
                      setIsOpen(false);
                      handleHomeClick(); // ✅ FIX
                    }}
                    className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-indigo-400 hover:bg-white/5 rounded-xl transition"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-indigo-400 hover:bg-white/5 rounded-xl transition"
                  >
                    {link.name}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
