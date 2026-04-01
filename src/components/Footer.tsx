import { Cloud, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0f14] pt-14 pb-8">

      <div className="max-w-5xl mx-auto px-4">

        {/* Top */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">

          {/* Logo */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <Cloud className="w-4.5 h-4.5 text-[#FF9900]/90" />
              <span className="text-sm font-medium tracking-tight">
                AWS <span className="text-[#FF9900]">Cloud Club MUJ</span>
              </span>
            </Link>

            <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
              Empowering students to learn, build, and grow with AWS cloud technologies.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-medium text-gray-300 mb-3">Quick Links</h4>

            <div className="flex flex-col gap-2 text-xs text-gray-400">
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#events" className="hover:text-white transition-colors">
                Events
              </a>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs font-medium text-gray-300 mb-3">Connect</h4>

            <div className="flex gap-2.5">

              <a
                href="https://www.instagram.com/awscloudclub_muj/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded border border-white/10 bg-[#161b22] hover:border-[#FF9900]/70 transition"
              >
                <Instagram className="w-3.5 h-3.5 text-gray-300" />
              </a>

              <a
                href="https://www.linkedin.com/company/aws-cloud-club-muj/posts/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded border border-white/10 bg-[#161b22] hover:border-[#FF9900]/70 transition"
              >
                <Linkedin className="w-3.5 h-3.5 text-gray-300" />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-500">

          <p>© 2026 AWS Cloud Club MUJ</p>

          <p className="mt-2 md:mt-0">
            Built with <span className="text-gray-400">♥</span> by AWS Cloud Club Team - MUJ
          </p>

        </div>

      </div>
    </footer>
  );
}
