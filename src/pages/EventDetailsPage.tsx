import { useSearchParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, User, ArrowLeft } from 'lucide-react';
import { EVENTS } from '../constants';
import { supabase } from '../lib/supabase';

export default function EventDetailsPage() {
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get('id');
  const event = EVENTS.find((e) => e.id === eventId);

  const [activeTab, setActiveTab] = useState<'meetup' | 'classes' | 'attendance'>('meetup');

  // ✅ Supabase Classes State
  const [classes, setClasses] = useState<any[]>([]);
  const [loadingClasses, setLoadingClasses] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Fetch classes from Supabase
  useEffect(() => {
    const fetchClasses = async () => {
      if (!event?.id) return;

      setLoadingClasses(true);

      const { data, error } = await supabase
        .from('classes')
        .select('*')
        .eq('event_id', event.id);

      if (!error) {
        setClasses(data || []);
      } else {
        console.error('Error fetching classes:', error);
      }

      setLoadingClasses(false);
    };

    fetchClasses();
  }, [event?.id]);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">Event not found</h2>
        <Link to="/" className="aws-button-primary">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Link to="/" className="inline-flex items-center space-x-2 text-gray-400 hover:text-aws-orange mb-12">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Events</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* LEFT: Event Info */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

              <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
                {event.title}
              </h1>

              <div className="flex flex-wrap gap-6 mb-12">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Calendar className="w-5 h-5 text-aws-orange" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock className="w-5 h-5 text-aws-orange" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin className="w-5 h-5 text-aws-orange" />
                  <span>{event.venue}</span>
                </div>
              </div>

              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-4">About the Event</h3>
                <p className="text-gray-400 text-lg">{event.fullDescription}</p>
              </div>

              {/* Speakers */}
              <div className="bg-aws-dark/50 border border-white/10 rounded-2xl p-8 mb-16">
                <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3">
                  <User className="w-6 h-6 text-aws-orange" />
                  <span>Speakers</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {event.speakers.map((speaker) => (
                    <div key={speaker.name} className="text-center">
                      <img
                        src={speaker.image}
                        className="w-32 h-32 rounded-xl mx-auto mb-4 object-cover"
                      />
                      <h4 className="font-bold">{speaker.name}</h4>
                      <p className="text-aws-orange text-sm">{speaker.designation}</p>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>

          {/* RIGHT: Tabs */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="aws-card p-6 sticky top-32"
            >

              {/* Tabs */}
              <div className="flex gap-2 mb-6">
                {['meetup', 'classes', 'attendance'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`px-3 py-2 rounded-lg text-sm capitalize ${
                      activeTab === tab
                        ? 'bg-aws-orange text-black'
                        : 'bg-gray-800 text-gray-300'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Meetup */}
              {activeTab === 'meetup' && (
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold">Register</h3>

                  <a
                    href={event.meetupLink || "https://www.meetup.com/"}
                    target="_blank"
                    className="aws-button-primary w-full"
                  >
                    Register on Meetup 🚀
                  </a>
                </div>
              )}

              {/* Classes (Supabase Connected) */}
              {activeTab === 'classes' && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Missed Classes</h3>

                  {loadingClasses ? (
                    <p className="text-gray-400">Loading...</p>
                  ) : classes.length === 0 ? (
                    <p className="text-gray-500">No classes found</p>
                  ) : (
                    <div className="space-y-4">
                      {classes.map((cls) => (
                        <div
                          key={cls.id}
                          className="bg-gray-800 p-4 rounded-lg border border-white/10"
                        >
                          <h4 className="font-semibold">{cls.title}</h4>
                          <p className="text-sm text-gray-400">👨‍🏫 {cls.teacher}</p>
                          <p className="text-sm text-gray-400">📅 {cls.date}</p>

                          {cls.recording && (
                            <a
                              href={cls.recording}
                              target="_blank"
                              className="text-aws-orange text-sm"
                            >
                              Watch Recording →
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Attendance */}
              {activeTab === 'attendance' && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Mark Attendance</h3>

                  <iframe
                    src="https://docs.google.com/forms/d/e/YOUR_REAL_FORM_ID/viewform?embedded=true"
                    className="w-full h-[500px] rounded-lg"
                  />
                </div>
              )}

            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
