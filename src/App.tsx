/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import EventDetailsPage from './pages/EventDetailsPage';

import MeetupPage from './pages/MeetupPage';
import ClassesPage from './pages/ClassesPage';
import AttendancePage from './pages/AttendancePage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-aws-black text-white selection:bg-aws-orange selection:text-black">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/event" element={<EventDetailsPage />} />

            <Route path="/meetup" element={<MeetupPage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/attendance" element={<AttendancePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
