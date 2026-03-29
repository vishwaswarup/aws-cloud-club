import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Only relevant links now
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Event', path: '/event' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 p-[2px] rounded-xl overflow-hidden bg-black/70 border border-white/15 group-hover:border-aws-orange/60 transition-colors">
              <img
                src="/images/cloud-logo.svg"
                alt="AWS Cloud Club Logo"
                className="w-full h-full object-cover scale-[1.45]"
              />
            </div>
            <span className="text-xl font-bold tracking-tight">
              AWS <span className="text-aws-orange">Cloud Club MUJ</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-aws-orange transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white"
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
            className="md:hidden bg-aws-dark border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-aws-orange hover:bg-white/5 rounded-md"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
