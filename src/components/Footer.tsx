import { Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {

  return (

    <footer className="border-t border-black/10 bg-[#f5f3ef] pt-20 pb-8">

      <div className="max-w-6xl mx-auto px-4">

        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-10 mb-14">

          {/* LOGO */}
          <div>

            <Link
              to="/"
              className="flex items-center gap-3 mb-4"
            >

              <img
                src="/newlogo.jpg"
                alt="AWS Cloud Club Logo"
                className="h-6 w-6 rounded-md object-contain"
              />

              <span className="text-sm font-medium tracking-[-0.02em] text-[#18181b]">

                AWS

                <span className="text-[#9b5cff]">
                  {" "}Student Builder Group MUJ
                </span>

              </span>

            </Link>

            <p className="text-sm text-[#666666] leading-relaxed max-w-sm">

              Empowering students to learn, build, and grow with
              AWS cloud technologies through workshops, collaboration,
              and hands-on learning experiences.

            </p>

          </div>

          {/* LINKS */}
          <div>

            <h4 className="text-xs font-medium uppercase tracking-[0.08em] text-[#18181b] mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3 text-sm">

              <a
                href="/"
                className="text-[#666666] hover:text-[#18181b] transition-colors"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-[#666666] hover:text-[#18181b] transition-colors"
              >
                About
              </a>

              <a
                href="#events"
                className="text-[#666666] hover:text-[#18181b] transition-colors"
              >
                Events
              </a>

            </div>

          </div>

          {/* SOCIALS */}
          <div>

            <h4 className="text-xs font-medium uppercase tracking-[0.08em] text-[#18181b] mb-4">
              Connect
            </h4>

            <div className="flex gap-3">

              <a
                href="https://www.instagram.com/awscloudclub_muj/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md border border-black/10 bg-white hover:border-[#9b5cff]/50 hover:-translate-y-[1px] transition-all duration-200"
              >

                <Instagram className="w-4 h-4 text-[#52525b]" />

              </a>

              <a
                href="https://www.linkedin.com/company/aws-cloud-club-muj/posts/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md border border-black/10 bg-white hover:border-[#9b5cff]/50 hover:-translate-y-[1px] transition-all duration-200"
              >

                <Linkedin className="w-4 h-4 text-[#52525b]" />

              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-black/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-[#666666]">

          <p>
            © 2026 AWS Student Builder Group MUJ
          </p>

          <p className="mt-3 md:mt-0">

            Built with

            <span className="mx-1 text-[#9b5cff]">
              ♥
            </span>

            by AWS Student Builder Group Team — MUJ

          </p>

        </div>

      </div>

    </footer>
  );
}
