import { useSearchParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, User, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { EVENTS } from '../constants';
import { supabase } from '../lib/supabase';
import { Registration } from '../types';

export default function EventDetailsPage() {
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get('id');
  const event = EVENTS.find((e) => e.id === eventId);

  const [formData, setFormData] = useState<Registration>({
    name: '',
    reg_id: '',
    email: '',
    branch_section: '',
    missed_classes: '',
    faculty_names: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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

  const registrationClosed = !event.registrationOpen;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (registrationClosed) {
      setStatus('error');
      setErrorMessage('Registrations are closed for this event.');
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');

    try {
      if (!supabase) {
        throw new Error('Supabase is not configured or the URL is invalid. Please ensure VITE_SUPABASE_URL is a valid HTTP/HTTPS URL and VITE_SUPABASE_ANON_KEY is set in your deployment environment variables.');
      }

      const { error } = await supabase
        .from('registrations')
        .insert([{ ...formData, event_id: event.id }]);

      if (error) throw error;

      setStatus('success');
      setFormData({
        name: '',
        reg_id: '',
        email: '',
        branch_section: '',
        missed_classes: '',
        faculty_names: '',
      });
    } catch (err: any) {
      console.error('Registration error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center space-x-2 text-gray-400 hover:text-aws-orange mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Events</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column: Event Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
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

              <div className="prose prose-invert max-w-none mb-16">
                <h3 className="text-2xl font-bold mb-4">About the Event</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {event.fullDescription}
                </p>
              </div>

              <div className="bg-aws-dark/50 border border-white/10 rounded-2xl p-8 mb-16">
                <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3">
                  <User className="w-6 h-6 text-aws-orange" />
                  <span>{event.speakers.length > 1 ? 'Featured Speakers' : 'Featured Speaker'}</span>
                </h3>
                <div
                  className={`grid grid-cols-1 gap-8 ${
                    event.speakers.length > 1 ? 'md:grid-cols-2' : 'max-w-lg mx-auto'
                  }`}
                >
                  {event.speakers.map((speaker) => (
                    <div key={speaker.name} className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-aws-orange/20 mb-5">
                        <img
                          src={speaker.image}
                          alt={speaker.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <h4 className="text-xl font-bold mb-2">{speaker.name}</h4>
                      <p className="text-aws-orange font-medium mb-3">{speaker.designation}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {speaker.bio || 'Cloud expert sharing practical insights for students and builders.'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {event.recap && (
                <div className="bg-aws-dark/40 border border-white/10 rounded-2xl p-8 mb-16">
                  <h3 className="text-2xl font-bold mb-8">{event.recap.title}</h3>

                  <div className="space-y-8">
                    {Array.from(
                      { length: Math.max(event.recap.photos.length, event.recap.paragraphs.length) },
                      (_, index) => ({
                        photo: event.recap.photos[index],
                        paragraph: event.recap.paragraphs[index],
                        index,
                      }),
                    ).map(({ photo, paragraph, index }) => (
                      <div key={index} className="space-y-5">
                        {photo && (
                          <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40 p-3">
                            <img
                              src={photo}
                              alt={`${event.title} recap ${index + 1}`}
                              className="w-full h-auto object-contain"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        )}

                        {paragraph && (
                          <p className="text-gray-300 leading-relaxed">
                            {paragraph}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Column: Registration Form */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="aws-card p-8 sticky top-32"
            >
              {registrationClosed ? (
                <div className="text-center py-8">
                  <h3 className="text-2xl font-bold mb-3">Registrations Closed</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    This event has already happened. Registration is no longer available.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-6">Register Now</h3>

                  {status === 'success' ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Registration Successful!</h4>
                      <p className="text-gray-400 mb-8">We've received your details. See you at the event!</p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="aws-button-secondary w-full"
                      >
                        Register Another
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {status === 'error' && (
                        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start space-x-3 text-red-500 text-sm">
                          <AlertCircle className="w-5 h-5 flex-shrink-0" />
                          <p>{errorMessage}</p>
                        </div>
                      )}

                      <div>
                        <label className="aws-label">Full Name</label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Mahendra Singh Dhoni"
                          className="aws-input"
                        />
                      </div>

                      <div>
                        <label className="aws-label">College Registration ID</label>
                        <input
                          required
                          type="text"
                          name="reg_id"
                          value={formData.reg_id}
                          onChange={handleChange}
                          placeholder="e.g. 2427010290"
                          className="aws-input"
                        />
                      </div>

                      <div>
                        <label className="aws-label">College Email</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="mahi.2427010290@manipal.edu"
                          className="aws-input"
                        />
                      </div>

                      <div>
                        <label className="aws-label">Branch & Section</label>
                        <input
                          required
                          type="text"
                          name="branch_section"
                          value={formData.branch_section}
                          onChange={handleChange}
                          placeholder="CSE AIML- Section A"
                          className="aws-input"
                        />
                      </div>

                      <div>
                        <label className="aws-label">Classes to be Missed</label>
                        <textarea
                          required
                          name="missed_classes"
                          value={formData.missed_classes}
                          onChange={handleChange}
                          placeholder="e.g. Data Structures, OS"
                          rows={2}
                          className="aws-input resize-none"
                        />
                      </div>

                      <div>
                        <label className="aws-label">Faculty Names for Missed Classes</label>
                        <textarea
                          required
                          name="faculty_names"
                          value={formData.faculty_names}
                          onChange={handleChange}
                          placeholder="e.g. Dr. Shashi, Dr. Preeti"
                          rows={2}
                          className="aws-input resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="aws-button-primary w-full"
                      >
                        {isSubmitting ? 'Registering...' : 'Confirm Registration'}
                      </button>

                      <p className="text-center text-xs text-gray-500">
                        By registering, you agree to follow the club's code of conduct.
                      </p>
                    </form>
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
