import { Link } from 'react-router-dom';
import { Cloud } from 'lucide-react';

export default function Navbar() {

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f14] border-b border-white/10">

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* LEFT - LOGO */}
          <Link
            to="/"
            onClick={handleHomeClick}
            className="flex items-center gap-2"
          >
            <Cloud className="w-5 h-5 text-[#FF9900]" />
            <span className="text-sm font-medium tracking-tight">
              AWS <span className="text-[#FF9900]">Cloud Club MUJ</span>
            </span>
          </Link>

          {/* 🔥 CENTER NAV (DESKTOP ONLY) */}
          <div className="hidden md:flex items-center gap-6 text-sm">

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
          <img
            src="/images/manipalpnglogo.png"
            alt="MUJ Logo"
            className="h-7 w-auto opacity-80 hover:opacity-100 transition"
          />

        </div>
      </div>

    </nav>
  );
}
