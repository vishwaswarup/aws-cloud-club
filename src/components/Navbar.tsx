import { Link } from 'react-router-dom';

export default function Navbar() {

  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (

    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f3ef]/90 backdrop-blur-md border-b border-black/10">

      <div className="max-w-6xl mx-auto px-4">

        <div className="flex items-center justify-between h-16">

          {/* LEFT - LOGO */}
          <Link
            to="/"
            onClick={handleHomeClick}
            className="flex items-center gap-3"
          >

            <img
              src="/newlogo.jpg"
              alt="AWS Cloud Club Logo"
              className="h-7 w-7 rounded-md object-contain"
            />

            <span className="text-sm font-medium tracking-[-0.02em] text-[#18181b]">

              AWS

              <span className="text-[#9b5cff]">
                {" "}Student Builder Group MUJ
              </span>

            </span>

          </Link>

          {/* CENTER NAV */}
          <div className="hidden md:flex items-center gap-8 text-sm">

            <Link
              to="/"
              onClick={handleHomeClick}
              className="text-[#666666] hover:text-[#18181b] transition-colors"
            >
              Home
            </Link>

            <a
              href="#events"
              className="text-[#666666] hover:text-[#18181b] transition-colors"
            >
              Events
            </a>

          </div>

          {/* RIGHT - MUJ LOGO */}
          <img
            src="/images/mujawslogo.png"
            alt="MUJ Logo"
            className="h-7 w-auto opacity-70 hover:opacity-100 transition duration-300"
          />

        </div>

      </div>

    </nav>
  );
}
