/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import EventDetailsPage from './pages/EventDetailsPage';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col text-white overflow-hidden">

        {/* 🔥 BACKGROUND GRADIENT */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#050816] via-[#0a0f2c] to-[#020617]" />

        {/* 🔥 GLOW EFFECTS */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-500/20 blur-[140px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/20 blur-[140px] rounded-full" />
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Main */}
        <main className="flex-grow">
          <Routes>
            {/* Home */}
            <Route path="/" element={<LandingPage />} />

            {/* Event */}
            <Route path="/event/:id" element={<EventDetailsPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
