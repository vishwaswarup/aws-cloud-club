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
        <h2 className="text-2xl font-semibold mb-4">Event not found</h2>
        <Link to="/" className="aws-button-primary">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-[#0b0f14] min-h-screen">
      <div className="max-w-6xl mx-auto px-4">

        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-aws-orange mb-10 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Events</span>
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* LEFT */}
          <div className="lg:col-span-2">

            <h1 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
              {event.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap gap-6 text-gray-400 text-sm mb-10">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-aws-orange" />
                {event.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-aws-orange" />
                {event.time}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-aws-orange" />
                {event.venue}
              </div>
            </div>

            {/* Description */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-3">About the Event</h3>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line break-words">
                {event.fullDescription}
              </p>
            </div>

            {/* Recap */}
            {expired && event.recap && (
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  {event.recap.title}
                </h3>

                <div className="space-y-4 text-gray-300">
                  {event.recap.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {/* Photos */}
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  {event.recap.photos.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="rounded-lg border border-white/10 object-cover h-44 w-full"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div>

            <div className="bg-[#161b22] border border-white/10 rounded-xl p-5 sticky top-24">

              {expired ? (
                <div className="text-center py-6">
                  <h3 className="font-semibold text-gray-200 mb-2">
                    Event Completed
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Registrations are closed.
                  </p>
                </div>
              ) : (
                <>
                  {/* Unlock */}
                  {!isUnlocked && (
                    <div className="mb-5">
                      <p className="text-xs text-gray-400 mb-2">
                        Enter access code
                      </p>
                      <input
                        value={accessCode}
                        onChange={(e) => setAccessCode(e.target.value)}
                        className="aws-input mb-2"
                        placeholder="Code"
                      />
                      <button
                        onClick={handleUnlock}
                        className="aws-button-primary w-full text-sm"
                      >
                        Unlock
                      </button>
                    </div>
                  )}

                  {/* Tabs */}
                  <div className="flex gap-2 mb-4">
                    {['meetup', 'classes', 'attendance'].map((tab) => {
                      const locked = !isUnlocked && tab !== 'meetup';

                      return (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab as any)}
                          className={`px-3 py-1.5 text-xs rounded ${
                            activeTab === tab
                              ? 'bg-aws-orange text-black'
                              : 'bg-[#0d1117] text-gray-400 hover:bg-[#1c2128]'
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
                      className="aws-button-primary w-full text-center text-sm"
                    >
                      Register on Meetup
                    </a>
                  )}

                  {/* Classes */}
                  {activeTab === 'classes' && (
                    !isUnlocked ? (
                      <p className="text-gray-500 text-center py-6 text-sm">🔒 Locked</p>
                    ) : (
                      <iframe
                        src="https://forms.office.com/Pages/ResponsePage.aspx?id=3S8oJwtM-026kSKM2D_fcRezTgSnBGVIthb_f4OG52FUNkJNVkpMSjY0ODMwRjhTOUJYMzA2SkVLVC4u&embed=true"
                        className="w-full h-[500px] rounded"
                      />
                    )
                  )}

                  {/* Attendance */}
                  {activeTab === 'attendance' && (
                    !isUnlocked ? (
                      <p className="text-gray-500 text-center py-6 text-sm">🔒 Locked</p>
                    ) : (
                      <iframe
                        src="https://forms.office.com/r/W2j1X1awYu?embed=true"
                        className="w-full h-[500px] rounded"
                      />
                    )
                  )}
                </>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
