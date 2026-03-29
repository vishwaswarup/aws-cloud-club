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
      <div className="min-h-screen flex flex-col bg-aws-black text-white selection:bg-aws-orange selection:text-black">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* Home */}
            <Route path="/" element={<LandingPage />} />

            {/* Event page (ALL sections inside this) */}
            <Route path="/event" element={<EventDetailsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
