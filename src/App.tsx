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
      <div className="min-h-screen flex flex-col bg-[#0b0f14] text-white">

        {/* Navbar */}
        <Navbar />

        {/* Main */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/event/:id" element={<EventDetailsPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
