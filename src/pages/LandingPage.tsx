import { motion } from 'motion/react';
import { Cloud, ArrowRight, Code, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom'; // ✅ IMPORTANT
import EventCard from '../components/EventCard';
import { EVENTS } from '../constants';

export default function LandingPage() {
  return (
    <div className="pt-20">

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aws-orange/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Cloud className="w-4 h-4 text-aws-orange" />
            <span className="text-sm text-gray-300">Official AWS Cloud Club</span>
          </motion.div>

          <motion.h1 className="text-5xl md:text-7xl font-extrabold mb-8">
            Build the Future on <br />
            <span className="text-aws-orange">AWS Cloud</span>
          </motion.h1>

          <motion.p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Join the most vibrant student community dedicated to cloud computing.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="#events" className="aws-button-primary flex items-center gap-2">
              Explore Events <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#about" className="aws-button-secondary">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-aws-dark/30">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-8">
              What is <span className="text-aws-orange">AWS Cloud Club?</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8">
              AWS Cloud Clubs are student-led communities focused on cloud learning.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <Code className="text-aws-orange" />
                <div>
                  <h4 className="font-bold">Hands-on Learning</h4>
                  <p className="text-sm text-gray-500">Build real projects</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Users className="text-aws-orange" />
                <div>
                  <h4 className="font-bold">Community</h4>
                  <p className="text-sm text-gray-500">Connect with peers</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Zap className="text-aws-orange" />
                <div>
                  <h4 className="font-bold">Certification</h4>
                  <p className="text-sm text-gray-500">AWS prep guidance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/cloud computing photo landing page.jpg"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* 🔥 Events Section (FIXED) */}
      <section id="events" className="py-24">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-gray-400">
              Don't miss out on our latest workshops and sessions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENTS.map((event, index) => (
              <Link key={event.id} to={`/event/${event.id}`}>
                <EventCard event={event} index={index} />
              </Link>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
