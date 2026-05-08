import { ArrowRight, Code, Users, Zap } from 'lucide-react';
import EventCard from '../components/EventCard';
import { EVENTS } from '../constants';
import CloudVisual from '../components/CloudVisual';

export default function LandingPage() {

  const sortedEvents = [...EVENTS].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="pt-20 bg-[#f5f3ef] text-black aws-grid-bg">

      {/* HERO */}
      <section className="py-24 border-b border-black/10">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-[-0.06em] leading-[0.92]">

            AWS Student
            <br />

            <span className="text-[#9b5cff]">
              Builder Group
            </span>

            <br />

            MUJ

          </h1>

          <p className="text-[#5f5f5f] text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            A student-led community at Manipal University Jaipur focused on learning,
            building, and growing with cloud technologies through real-world exposure
            and collaboration.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">

            <a
              href="#events"
              className="aws-button-primary flex items-center gap-2 justify-center"
            >
              Explore Events
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#about"
              className="aws-button-secondary"
            >
              Learn More
            </a>

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-28 border-b border-black/10"
      >

        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.05em] leading-[1] mb-8">

              About

              <br />

              <span className="text-[#9b5cff]">
                AWS Student Builder Group MUJ
              </span>

            </h2>

            <p className="text-[#5f5f5f] text-sm md:text-base mb-5 leading-relaxed">
              AWS Student Builder Group MUJ is a student-driven initiative built
              to bridge the gap between theoretical knowledge and real-world cloud
              applications. The club provides a platform where students can actively
              explore AWS technologies, understand how modern systems are built,
              and gain hands-on experience.
            </p>

            <p className="text-[#5f5f5f] text-sm md:text-base mb-5 leading-relaxed">
              We focus on practical learning — from building backend systems to
              deploying scalable applications. Our sessions are designed to ensure
              that members not only understand concepts but also apply them in
              meaningful ways.
            </p>

            <p className="text-[#5f5f5f] text-sm md:text-base mb-10 leading-relaxed">
              Members can expect workshops, collaborative projects, guest sessions,
              and opportunities to work with tools used in the industry. The club
              emphasizes consistency, curiosity, and building real skills over
              passive learning.
            </p>

            {/* FEATURES */}
            <div className="space-y-6">

              <div className="flex gap-4 items-start">

                <Code className="text-[#9b5cff] w-4 h-4 mt-1" />

                <div>

                  <h4 className="font-medium text-sm mb-1">
                    Hands-on Projects
                  </h4>

                  <p className="text-xs text-[#666666]">
                    Build and deploy real applications using AWS
                  </p>

                </div>

              </div>

              <div className="flex gap-4 items-start">

                <Users className="text-[#9b5cff] w-4 h-4 mt-1" />

                <div>

                  <h4 className="font-medium text-sm mb-1">
                    Strong Community
                  </h4>

                  <p className="text-xs text-[#666666]">
                    Learn and collaborate with like-minded students
                  </p>

                </div>

              </div>

              <div className="flex gap-4 items-start">

                <Zap className="text-[#9b5cff] w-4 h-4 mt-1" />

                <div>

                  <h4 className="font-medium text-sm mb-1">
                    Industry Exposure
                  </h4>

                  <p className="text-xs text-[#666666]">
                    Interact with experts and understand real-world workflows
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="space-y-6">

            {/* CLOUD VISUAL */}
            <div className="rounded-md border border-black/10 overflow-hidden bg-white">
              <CloudVisual />
            </div>

            {/* IMAGE GRID */}
            <div className="grid grid-cols-2 gap-4">

              <div className="aspect-[4/3] overflow-hidden rounded-md border border-black/10 bg-white">

                <img
                  src="/images/about1.jpeg"
                  className="w-full h-full object-cover hover:opacity-90 transition duration-300"
                />

              </div>

              <div className="aspect-[4/3] overflow-hidden rounded-md border border-black/10 bg-white">

                <img
                  src="/images/about2.jpeg"
                  className="w-full h-full object-cover hover:opacity-90 transition duration-300"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* EVENTS */}
      <section
        id="events"
        className="py-28"
      >

        <div className="max-w-6xl mx-auto px-4">

          <div className="mb-14">

            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.05em] leading-none mb-3">
              Events
            </h2>

            <p className="text-[#5f5f5f] text-sm md:text-base">
              Explore our workshops, sessions, and past events.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {sortedEvents.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
              />
            ))}

          </div>

        </div>

      </section>

    </div>
  );
}
