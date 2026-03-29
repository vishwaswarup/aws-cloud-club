import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ArrowLeft } from 'lucide-react';
import { EVENTS } from '../constants';

export default function EventDetailsPage() {
  const { id } = useParams(); // ✅ FIXED
  const event = EVENTS.find((e) => e.id === id);

  const [activeTab, setActiveTab] = useState<'meetup' | 'classes' | 'attendance'>('meetup');

  const [accessCode, setAccessCode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);

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

        <Link to="/" className="inline-flex items-center space-x-2 text-gray-400 hover:text-aws-orange mb-12">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Events</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* LEFT */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-8">{event.title}</h1>

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
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-1">
            <motion.div className="aws-card p-6 sticky top-32">

              {!isUnlocked && (
                <div className="mb-6 p-4 bg-gray-900 rounded-lg border border-white/10">
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

                  <button onClick={handleUnlock} className="aws-button-primary w-full">
                    Unlock 🔓
                  </button>
                </div>
              )}

              <div className="flex gap-2 mb-6">
                {['meetup', 'classes', 'attendance'].map((tab) => {
                  const locked = !isUnlocked && tab !== 'meetup';

                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab as any)}
                      className={`px-3 py-2 rounded-lg text-sm capitalize ${
                        activeTab === tab
                          ? 'bg-aws-orange text-black'
                          : 'bg-gray-800 text-gray-300'
                      }`}
                    >
                      {tab} {locked && "🔒"}
                    </button>
                  );
                })}
              </div>

              {activeTab === 'meetup' && (
                <a href={event.meetupLink} target="_blank" className="aws-button-primary w-full">
                  Register on Meetup 🚀
                </a>
              )}

              {activeTab === 'classes' && (
                !isUnlocked ? <p>🔒 Enter code</p> :
                <iframe src="https://forms.office.com/Pages/ResponsePage.aspx?id=3S8oJwtM-026kSKM2D_fcRezTgSnBGVIthb_f4OG52FUNkJNVkpMSjY0ODMwRjhTOUJYMzA2SkVLVC4u&embed=true" className="w-full h-[600px]" />
              )}

              {activeTab === 'attendance' && (
                !isUnlocked ? <p>🔒 Enter code</p> :
                <iframe src="https://forms.office.com/r/W2j1X1awYu?embed=true" className="w-full h-[600px]" />
              )}

            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
