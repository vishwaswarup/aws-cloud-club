import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, ArrowLeft } from 'lucide-react';
import { EVENTS } from '../constants';

export default function EventDetailsPage() {
  const { id } = useParams();
  const event = EVENTS.find((e) => e.id === id);

  const [activeTab, setActiveTab] = useState<'meetup' | 'classes'>('meetup');
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
      <div className="min-h-screen flex items-center justify-center bg-[#0b0f14]">
        <div className="text-center">
          <h2 className="text-base font-medium mb-4">Event not found</h2>
          <Link to="/" className="aws-button-primary">Go Back</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-[#0b0f14] min-h-screen">
      <div className="max-w-5xl mx-auto px-4">

        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#FF9900] mb-6 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Events
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT */}
          <div className="lg:col-span-2">

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-medium mb-4 leading-tight">
              {event.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap gap-5 text-gray-500 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#FF9900]/90" />
                {event.date}
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF9900]/90" />
                {event.time}
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF9900]/90" />
                {event.venue}
              </div>
            </div>

            {/* Description */}
            <div className="mb-10">
              <h3 className="text-base font-medium mb-2 text-gray-200">
                About the Event
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {event.fullDescription}
              </p>
            </div>

            {/* Recap */}
            {expired && event.recap && (
              <div>
                <h3 className="text-base font-medium mb-3 text-gray-200">
                  {event.recap.title}
                </h3>

                <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                  {event.recap.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-3 mt-5">
                  {event.recap.photos.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="rounded-md border border-white/10 object-cover h-40 w-full"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* MAIN PANEL */}
            <div className="bg-[#161b22] border border-white/10 rounded-md p-4 sticky top-24">

              {expired ? (
                <div className="text-center py-5">
                  <h3 className="text-gray-300 text-sm font-medium mb-1">
                    Event Completed
                  </h3>
                  <p className="text-gray-500 text-xs">
                    Registrations are closed
                  </p>
                </div>
              ) : (
                <>
                  {/* Unlock */}
                  {!isUnlocked && (
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-1">
                        Access code
                      </p>

                      <input
                        value={accessCode}
                        onChange={(e) => setAccessCode(e.target.value)}
                        className="aws-input mb-2"
                        placeholder="Enter code"
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
                  <div className="flex gap-2 mb-3">
                    {['meetup', 'classes'].map((tab) => {
                      const locked = !isUnlocked && tab !== 'meetup';

                      return (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab as any)}
                          className={`px-2.5 py-1 text-xs rounded-md ${
                            activeTab === tab
                              ? 'bg-[#FF9900] text-black'
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
                      <p className="text-gray-500 text-center py-5 text-xs">
                        🔒 Enter code to access
                      </p>
                    ) : (
                      <iframe
                        src="https://forms.office.com/Pages/ResponsePage.aspx?id=3S8oJwtM-026kSKM2D_fcRezTgSnBGVIthb_f4OG52FUNkJNVkpMSjY0ODMwRjhTOUJYMzA2SkVLVC4u&embed=true"
                        className="w-full h-[460px] rounded-md"
                      />
                    )
                  )}
                </>
              )}
            </div>

            {/* 🔥 STEPS SECTION */}
            {!expired && (
              <div className="bg-[#161b22] border border-white/10 rounded-md p-4">

                <h3 className="text-sm font-medium mb-3 text-white">
                  Steps to Access
                </h3>

                <div className="space-y-2 text-xs text-gray-400">

                  <div className="flex gap-2">
                    <span className="text-[#FF9900] font-medium">1.</span>
                    <p>Register on Meetup</p>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-[#FF9900] font-medium">2.</span>
                    <p>Get the code for class attendance</p>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-[#FF9900] font-medium">3.</span>
                    <p>Enter the code in the textbox</p>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-[#FF9900] font-medium">4.</span>
                    <p>Unlock the classes</p>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-[#FF9900] font-medium">5.</span>
                    <p>Fill the form and get attendance</p>
                  </div>

                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
