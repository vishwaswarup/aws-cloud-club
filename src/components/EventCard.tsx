import { Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Event } from '../types/index';
import { motion } from 'motion/react';

export default function EventCard({
  event,
  index
}: {
  event: Event;
  index: number;
}) {

  const isEventExpired = (eventDate: string) => {

    const today = new Date();

    const eventD = new Date(eventDate);

    today.setHours(0, 0, 0, 0);

    eventD.setHours(0, 0, 0, 0);

    return eventD < today;
  };

  const expired = isEventExpired(event.date);

  return (

    <Link
      to={`/event/${event.id}`}
      className="block h-full group"
    >

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -3 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.06 }}
        className="h-full"
      >

        <div
          className={`
            bg-white
            border
            border-black/10
            rounded-md
            p-6
            flex
            flex-col
            h-full
            min-h-[260px]
            transition-all
            duration-300
            shadow-[0_2px_12px_rgba(0,0,0,0.03)]

            ${!expired && `
              hover:border-[#9b5cff]/30
              hover:shadow-[0_10px_32px_rgba(0,0,0,0.06)]
            `}
          `}
        >

          {/* PAST BADGE */}
          {expired && (

            <span className="text-[10px] px-2 py-1 rounded-md bg-red-500/8 text-red-500 mb-4 w-fit border border-red-500/10">

              Past Event

            </span>

          )}

          {/* DATE */}
          <div className="flex items-center gap-2 text-[#666666] mb-3 text-xs">

            <Calendar className="w-3.5 h-3.5 text-[#9b5cff]" />

            {event.date}

          </div>

          {/* TITLE */}
          <h3 className="text-lg font-medium mb-3 text-[#18181b] leading-snug tracking-[-0.02em]">

            {event.title}

          </h3>

          {/* DESCRIPTION */}
          <p className="text-[#52525b] text-sm mb-6 line-clamp-3 leading-relaxed">

            {event.shortDescription}

          </p>

          {/* META */}
          <div className="flex flex-col gap-2 text-xs text-[#666666] mb-6">

            <div className="flex items-center gap-2">

              <MapPin className="w-3.5 h-3.5 text-[#9b5cff]" />

              {event.venue}

            </div>

            <div className="flex items-center gap-2">

              <Clock className="w-3.5 h-3.5 text-[#9b5cff]" />

              {event.time}

            </div>

          </div>

          {/* CTA */}
          <div className="mt-auto flex items-center gap-2 text-[#9b5cff] text-sm font-medium tracking-[-0.01em]">

            View Details

            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />

          </div>

        </div>

      </motion.div>

    </Link>
  );
}
