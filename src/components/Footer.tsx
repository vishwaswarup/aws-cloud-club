import { Cloud, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-white/10 bg-transparent backdrop-blur-xl">

      {/* Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 bottom-0 w-[300px] h-[300px] bg-indigo-500/20 blur-[120px] rounded-full" />
        <div className="absolute right-1/4 bottom-0 w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Logo + About */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">

              {/* Gradient Logo */}
              <div className="p-[2px] rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500">
                <div className="p-2 rounded-xl bg-[#050816]">
                  <Cloud className="w-6 h-6 text-indigo-400" />
                </div>
              </div>

              <span className="text-xl font-bold tracking-tight">
                AWS <span className="text-indigo-400">Cloud Club</span>
              </span>
            </Link>

            <p className="text-gray-400 max-w-md leading-relaxed">
              Empowering students to build the future with AWS Cloud technologies.
              Join our community to learn, build, and grow together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="/" className="hover:text-indigo-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-indigo-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-indigo-400 transition-colors">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-bold mb-6">Follow Us</h4>

            <div className="flex space-x-4">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/awscloudclub_muj/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 border border-white/10 hover:border-pink-400/40 transition-all"
              >
                <Instagram className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/aws-cloud-club-muj/posts/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-400/40 transition-all"
              >
                <Linkedin className="w-5 h-5 text-gray-300 hover:text-blue-400" />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 AWS Cloud Club. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Built with ❤️ by AWS Cloud Club - MUJ Team</p>
        </div>

      </div>
    </footer>
  );
}
