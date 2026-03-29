import { Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Event } from '../types/index';
import { motion } from 'motion/react';

export default function EventCard({ event, index }: { event: Event; index: number }) {
  return (
    <Link to={`/event/${event.id}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.04, y: -4 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 bg-[length:200%_200%] animate-gradient"
      >
        {/* Inner Card */}
        <div className="rounded-2xl bg-[#0b0f1a]/90 backdrop-blur-xl p-8 border border-white/10 transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(99,102,241,0.4)]">

          {/* Date */}
          <div className="flex items-center space-x-2 text-indigo-400 mb-4">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">{event.date}</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-4 transition-all duration-300 group-hover:text-indigo-300">
            {event.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 mb-6 line-clamp-2">
            {event.shortDescription}
          </p>

          {/* Meta Info */}
          <div className="flex flex-col gap-2 text-sm text-gray-500 mb-8">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>{event.venue}</span>
            </div>

            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>{event.time}</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center space-x-2 text-indigo-400 font-semibold group/btn">
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </div>

        </div>
      </motion.div>
    </Link>
  );
}
