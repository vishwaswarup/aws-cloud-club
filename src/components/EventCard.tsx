import { Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Event } from '../types/index';
import { motion } from 'motion/react';

export default function EventCard({ event, index }: { event: Event; index: number }) {

  const isEventExpired = (eventDate: string) => {
    const today = new Date();
    const eventD = new Date(eventDate);

    today.setHours(0, 0, 0, 0);
    eventD.setHours(0, 0, 0, 0);

    return eventD < today;
  };

  const expired = isEventExpired(event.date);

  return (
    <Link to={`/event/${event.id}`} className="block h-full group">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -2 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.06 }}
        className="h-full"
      >

        <div className={`bg-[#161b22] border border-white/10 rounded-md p-5 flex flex-col h-full min-h-[250px] transition-all duration-200
          ${!expired && 'hover:border-white/20'}
        `}>

          {/* Past Badge */}
          {expired && (
            <span className="text-[10px] px-2 py-1 rounded bg-red-500/10 text-red-400 mb-3 w-fit">
              Past Event
            </span>
          )}

          {/* Date */}
          <div className="flex items-center gap-2 text-gray-500 mb-2 text-xs">
            <Calendar className="w-3.5 h-3.5 text-[#FF9900]/90" />
            {event.date}
          </div>

          {/* Title */}
          <h3 className="text-base font-medium mb-2 text-white leading-snug">
            {event.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-xs mb-4 line-clamp-2 leading-relaxed">
            {event.shortDescription}
          </p>

          {/* Meta */}
          <div className="flex flex-col gap-1.5 text-[11px] text-gray-500 mb-5">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#FF9900]/80" />
              {event.venue}
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#FF9900]/80" />
              {event.time}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-auto flex items-center gap-1.5 text-[#FF9900] text-xs font-medium">
            View Details
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </div>

        </div>

      </motion.div>
    </Link>
  );
}
