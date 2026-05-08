import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, ArrowLeft } from 'lucide-react';
import { EVENTS } from '../constants';

export default function EventDetailsPage() {

  const { id } = useParams();

  const event = EVENTS.find((e) => e.id === id);

  const [activeTab, setActiveTab] =
    useState<'meetup' | 'classes'>('meetup');

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

          <h2 className="text-base font-medium mb-4">
            Event not found
          </h2>

          <Link
            to="/"
            className="aws-button-primary"
          >
            Go Back
          </Link>

        </div>

      </div>
    );
  }

  return (

    <div className="pt-24 pb-24 bg-[#f5f3ef] min-h-screen text-[#18181b]">

      <div className="max-w-6xl mx-auto px-4">

        {/* BACK */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#666666] hover:text-[#9b5cff] transition-colors mb-10 text-sm"
        >

          <ArrowLeft className="w-4 h-4" />

          Back to Events

        </Link>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* LEFT */}
          <div className="lg:col-span-2">

            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-semibold tracking-[-0.05em] leading-[0.95] mb-6">

              {event.title}

            </h1>

            {/* META */}
            <div className="flex flex-wrap gap-6 text-[#666666] text-sm mb-10">

              <div className="flex items-center gap-2">

                <Calendar className="w-4 h-4 text-[#9b5cff]" />

                {event.date}

              </div>

              <div className="flex items-center gap-2">

                <Clock className="w-4 h-4 text-[#9b5cff]" />

                {event.time}

              </div>

              <div className="flex items-center gap-2">

                <MapPin className="w-4 h-4 text-[#9b5cff]" />

                {event.venue}

              </div>

            </div>

            {/* DESCRIPTION */}
            <div className="mb-14">

              <h3 className="text-lg font-medium mb-4">
                About the Event
              </h3>

              <p className="text-[#52525b] text-sm md:text-base leading-relaxed">
                {event.fullDescription}
              </p>

            </div>

            {/* RECAP */}
            {expired && event.recap && (

              <div>

                <h3 className="text-lg font-medium mb-5">
                  {event.recap.title}
                </h3>

                <div className="space-y-4 text-[#52525b] text-sm md:text-base leading-relaxed">

                  {event.recap.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}

                </div>

                <div className="grid md:grid-cols-3 gap-4 mt-8">

                  {event.recap.photos.map((img, i) => (

                    <img
                      key={i}
                      src={img}
                      className="rounded-md border border-black/10 object-cover h-44 w-full hover:opacity-95 transition duration-300"
                    />

                  ))}

                </div>

              </div>

            )}

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* MAIN PANEL */}
            <div className="bg-white border border-black/10 rounded-md p-5 sticky top-24 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">

              {expired ? (

                <div className="text-center py-6">

                  <h3 className="text-[#18181b] text-sm font-medium mb-1">
                    Event Completed
                  </h3>

                  <p className="text-[#666666] text-xs">
                    Registrations are closed
                  </p>

                </div>

              ) : (

                <>

                  {/* UNLOCK */}
                  {!isUnlocked && (

                    <div className="mb-5">

                      <p className="text-xs text-[#666666] mb-2">
                        Access code
                      </p>

                      <input
                        value={accessCode}
                        onChange={(e) => setAccessCode(e.target.value)}
                        className="aws-input mb-3"
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

                  {/* TABS */}
                  <div className="flex gap-2 mb-4">

                    {['meetup', 'classes'].map((tab) => {

                      const locked =
                        !isUnlocked && tab !== 'meetup';

                      return (

                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab as any)}
                          className={`px-3 py-1.5 text-xs rounded-md transition-all ${
                            activeTab === tab
                              ? 'bg-[#9b5cff] text-white'
                              : 'bg-[#f3f4f6] text-[#666666] hover:bg-[#ececec]'
                          }`}
                        >

                          {tab}

                          {locked && " 🔒"}

                        </button>

                      );
                    })}

                  </div>

                  {/* MEETUP */}
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

                  {/* CLASSES */}
                  {activeTab === 'classes' && (

                    !isUnlocked ? (

                      <p className="text-[#666666] text-center py-5 text-xs">
                        🔒 Enter code to access
                      </p>

                    ) : (

                      <iframe
                        src="https://forms.office.com/Pages/ResponsePage.aspx?id=3S8oJwtM-026kSKM2D_fcRezTgSnBGVIthb_f4OG52FUNkJNVkpMSjY0ODMwRjhTOUJYMzA2SkVLVC4u&embed=true"
                        className="w-full h-[460px] rounded-md border border-black/10"
                      />

                    )

                  )}

                </>

              )}

            </div>

            {/* STEPS */}
            {!expired && (

              <div className="bg-white border border-black/10 rounded-md p-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">

                <h3 className="text-sm font-medium mb-4">
                  Steps to Access
                </h3>

                <div className="space-y-3 text-xs text-[#52525b]">

                  <div className="flex gap-2">

                    <span className="text-[#9b5cff] font-medium">
                      1.
                    </span>

                    <p>Register on Meetup</p>

                  </div>

                  <div className="flex gap-2">

                    <span className="text-[#9b5cff] font-medium">
                      2.
                    </span>

                    <p>Get the code for class attendance</p>

                  </div>

                  <div className="flex gap-2">

                    <span className="text-[#9b5cff] font-medium">
                      3.
                    </span>

                    <p>Enter the code in the textbox</p>

                  </div>

                  <div className="flex gap-2">

                    <span className="text-[#9b5cff] font-medium">
                      4.
                    </span>

                    <p>Unlock the classes</p>

                  </div>

                  <div className="flex gap-2">

                    <span className="text-[#9b5cff] font-medium">
                      5.
                    </span>

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
