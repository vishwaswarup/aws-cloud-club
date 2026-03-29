import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ArrowLeft } from 'lucide-react';
import { EVENTS } from '../constants';

export default function EventDetailsPage() {
  const { id } = useParams();
  const event = EVENTS.find((e) => e.id === id);

  const [activeTab, setActiveTab] = useState<'meetup' | 'classes' | 'attendance'>('meetup');
  const [accessCode, setAccessCode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);

  // 🔥 EXPIRY CHECK
  const isEventExpired = (eventDate: string) => {
    const today = new Date();
    const eventD = new Date(eventDate);

    today.setHours(0, 0, 0, 0);
    eventD.setHours(0, 0, 0, 0);

    return eventD < today;
  };

  const expired = event ? isEventExpired(event.date) : false;

  const handleUnlock = () => {
    if (accessCode.trim() === "AWS2026") {
      setIsUnlocked(true);
      setActiveTab("classes");
    } else {
      alert("Invalid Code ❌");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

        {/* Back */}
        <Link to="/" className="inline-flex items-center space-x-2 text-gray-400 hover:text-indigo-400 mb-12">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Events</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* LEFT */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

              <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
                {event.title}
              </h1>

              <div className="flex flex-wrap gap-6 mb-12 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-indigo-400" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-purple-400" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>{event.venue}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-4">About the Event</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {event.fullDescription}
                </p>
              </div>

              {/* 🔥 RECAP + PHOTOS FOR PAST EVENTS */}
              {expired && event.recap && (
                <div className="mt-16">
                  <h3 className="text-2xl font-bold mb-6">
                    {event.recap.title}
                  </h3>

                  {/* Paragraphs */}
                  <div className="space-y-4 text-gray-400">
                    {event.recap.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  {/* Photos */}
                  <div className="grid md:grid-cols-3 gap-4 mt-8">
                    {event.recap.photos.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        className="rounded-xl object-cover w-full h-48"
                      />
                    ))}
                  </div>
                </div>
              )}

            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-1">
            <motion.div className="aws-card p-6 sticky top-32">

              {expired ? (
                <div className="text-center py-10">
                  <h3 className="text-xl font-bold text-gray-300 mb-2">
                    Event Completed 🎉
                  </h3>
                  <p className="text-gray-500">
                    Registrations are closed for this event.
                  </p>
                </div>
              ) : (
                <>
                  {/* Unlock */}
                  {!isUnlocked && (
                    <div className="mb-6 p-4 bg-[#0b0f1a]/80 rounded-xl border border-white/10 backdrop-blur-lg">
                      <p className="text-sm text-gray-400 mb-2">
                        Enter access code to unlock Classes & Attendance
                      </p>

                      <input
                        type="text"
                        value={accessCode}
                        onChange={(e) => setAccessCode(e.target.value)}
                        placeholder="Enter code"
                        className="aws-input mb-2"
                      />

                      <button
                        onClick={handleUnlock}
                        className="aws-button-primary w-full"
                      >
                        Unlock 🔓
                      </button>
                    </div>
                  )}

                  {/* Tabs */}
                  <div className="flex gap-2 mb-6">
                    {['meetup', 'classes', 'attendance'].map((tab) => {
                      const locked = !isUnlocked && tab !== 'meetup';

                      return (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab as any)}
                          className={`px-3 py-2 rounded-xl text-sm capitalize ${
                            activeTab === tab
                              ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                              : 'bg-white/5 text-gray-300'
                          }`}
                        >
                          {tab} {locked && "🔒"}
                        </button>
                      );
                    })}
                  </div>

                  {/* Meetup */}
                  {activeTab === 'meetup' && (
                    <a
                      href={event.meetupLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="aws-button-primary w-full text-center block"
                    >
                      Register on Meetup 🚀
                    </a>
                  )}

                  {/* Classes */}
                  {activeTab === 'classes' && (
                    !isUnlocked ? (
                      <p className="text-gray-500 text-center py-10">🔒 Enter code</p>
                    ) : (
                      <iframe
                        src="https://forms.office.com/Pages/ResponsePage.aspx?id=3S8oJwtM-026kSKM2D_fcRezTgSnBGVIthb_f4OG52FUNkJNVkpMSjY0ODMwRjhTOUJYMzA2SkVLVC4u&embed=true"
                        className="w-full h-[600px] rounded-xl"
                      />
                    )
                  )}

                  {/* Attendance */}
                  {activeTab === 'attendance' && (
                    !isUnlocked ? (
                      <p className="text-gray-500 text-center py-10">🔒 Enter code</p>
                    ) : (
                      <iframe
                        src="https://forms.office.com/r/W2j1X1awYu?embed=true"
                        className="w-full h-[600px] rounded-xl"
                      />
                    )
                  )}
                </>
              )}

            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
