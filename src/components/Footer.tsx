import { Cloud, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-aws-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-aws-orange rounded-lg">
                <Cloud className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                AWS <span className="text-aws-orange">Cloud Club</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Empowering students to build the future with AWS Cloud technologies. 
              Join our community to learn, build, and grow together.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="/" className="hover:text-aws-orange transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-aws-orange transition-colors">About Us</a></li>
              <li><a href="#events" className="hover:text-aws-orange transition-colors">Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-aws-orange hover:text-black transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-aws-orange hover:text-black transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/aws-cloud-club-muj/posts/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AWS Cloud Club MUJ on LinkedIn"
                className="p-2 bg-white/5 rounded-lg hover:bg-aws-orange hover:text-black transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 AWS Cloud Club. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Built with ❤️ for the Cloud Community</p>
        </div>
      </div>
    </footer>
  );
}
