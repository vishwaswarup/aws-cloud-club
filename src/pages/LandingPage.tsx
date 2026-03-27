import { motion } from 'motion/react';
import { Cloud, ArrowRight, Code, Users, Zap } from 'lucide-react';
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
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Cloud className="w-4 h-4 text-aws-orange" />
            <span className="text-sm font-medium text-gray-300">Official AWS Cloud Club</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight"
          >
            Build the Future on <br />
            <span className="text-aws-orange">AWS Cloud</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Join the most vibrant student community dedicated to cloud computing. 
            Learn from experts, build real-world projects, and accelerate your career.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a href="#events" className="aws-button-primary w-full sm:w-auto flex items-center justify-center space-x-2">
              <span>Explore Events</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#about" className="aws-button-secondary w-full sm:w-auto">
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-aws-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">
                What is <span className="text-aws-orange">AWS Cloud Club?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                AWS Cloud Clubs are student-led communities for those interested in cloud computing. 
                Our mission is to bridge the gap between academia and industry by providing students 
                with the tools, resources, and mentorship they need to excel in the cloud.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-aws-orange/10 rounded-lg">
                    <Code className="w-6 h-6 text-aws-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Hands-on Learning</h4>
                    <p className="text-sm text-gray-500">Workshops and labs to build real projects.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-aws-orange/10 rounded-lg">
                    <Users className="w-6 h-6 text-aws-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Community</h4>
                    <p className="text-sm text-gray-500">Connect with like-minded cloud enthusiasts.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-aws-orange/10 rounded-lg">
                    <Zap className="w-6 h-6 text-aws-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Certification</h4>
                    <p className="text-sm text-gray-500">Guidance for AWS certifications.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/images/cloud computing photo landing page.jpg"
                  alt="Students working"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-8 aws-card hidden md:block">
                <p className="text-3xl font-bold text-aws-orange">500+</p>
                <p className="text-sm text-gray-400">Active Members</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't miss out on our latest workshops, talks, and networking sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENTS.map((event, index) => (
              <div key={event.id}>
                <EventCard event={event} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
