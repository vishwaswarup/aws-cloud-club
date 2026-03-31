import { Cloud, ArrowRight, Code, Users, Zap } from 'lucide-react';
import EventCard from '../components/EventCard';
import { EVENTS } from '../constants';
import CloudVisual from '../components/CloudVisual';

export default function LandingPage() {

  const sortedEvents = [...EVENTS].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="pt-20 bg-[#0b0f14]">

      {/* HERO */}
      <section className="py-16 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 text-center">

          <h1 className="text-3xl md:text-5xl font-semibold mb-5 tracking-tight leading-tight">
            <span className="text-[#FF9900]">AWS Cloud Club - MUJ</span>
          </h1>

          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            A student-led community at Manipal University Jaipur focused on learning, building,
            and growing with cloud technologies through real-world exposure and collaboration.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="#events" className="aws-button-primary flex items-center gap-2 justify-center">
              Explore Events <ArrowRight className="w-4 h-4" />
            </a>

            <a href="#about" className="aws-button-secondary">
              Learn More
            </a>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>

            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              About <span className="text-[#FF9900]">AWS Cloud Club MUJ</span>
            </h2>

            <p className="text-gray-400 text-sm md:text-base mb-5 leading-relaxed">
              AWS Cloud Club MUJ is a student-driven initiative built to bridge the gap between
              theoretical knowledge and real-world cloud applications. The club provides a platform
              where students can actively explore AWS technologies, understand how modern systems
              are built, and gain hands-on experience.
            </p>

            <p className="text-gray-400 text-sm md:text-base mb-5 leading-relaxed">
              We focus on practical learning — from building backend systems to deploying scalable
              applications. Our sessions are designed to ensure that members not only understand
              concepts but also apply them in meaningful ways.
            </p>

            <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed">
              Members can expect workshops, collaborative projects, guest sessions, and opportunities
              to work with tools used in the industry. The club emphasizes consistency, curiosity,
              and building real skills over passive learning.
            </p>

            {/* FEATURES */}
            <div className="space-y-4">

              <div className="flex gap-3 items-start">
                <Code className="text-[#FF9900] w-4 h-4 mt-1" />
                <div>
                  <h4 className="font-medium text-sm">Hands-on Projects</h4>
                  <p className="text-xs text-gray-500">
                    Build and deploy real applications using AWS
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Users className="text-[#FF9900] w-4 h-4 mt-1" />
                <div>
                  <h4 className="font-medium text-sm">Strong Community</h4>
                  <p className="text-xs text-gray-500">
                    Learn and collaborate with like-minded students
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Zap className="text-[#FF9900] w-4 h-4 mt-1" />
                <div>
                  <h4 className="font-medium text-sm">Industry Exposure</h4>
                  <p className="text-xs text-gray-500">
                    Interact with experts and understand real-world workflows
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="space-y-6">

            {/* 🔥 ANIMATION */}
            <div className="rounded-lg border border-white/10 overflow-hidden">
              <CloudVisual />
            </div>

            {/* 🔥 IMAGE GRID (FIXED PROPERLY) */}
            <div className="grid grid-cols-2 gap-4">

              <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
                <img
                  src="/images/about1.jpeg"
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
                <img
                  src="/images/about2.jpeg"
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="py-20">
        <div className="max-w-6xl mx-auto px-4">

          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Events
            </h2>

            <p className="text-gray-400 text-sm">
              Explore our workshops, sessions, and past events.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sortedEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
