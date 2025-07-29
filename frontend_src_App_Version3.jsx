import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Competitors from './pages/Competitors';
import ContentHub from './pages/ContentHub';
import CashLog from './pages/CashLog';
import Ads from './pages/Ads';
import Audience from './pages/Audience';
import Analytics from './pages/Analytics';
import AdIdeas from './pages/AdIdeas';
import AutoMessages from './pages/AutoMessages';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Dashboard</Link>{" | "}
        <Link to="/competitors">Competitors</Link>{" | "}
        <Link to="/content">Content Hub</Link>{" | "}
        <Link to="/cashlog">Cash Log</Link>{" | "}
        <Link to="/ads">Ads</Link>{" | "}
        <Link to="/audience">Audience</Link>{" | "}
        <Link to="/analytics">Analytics</Link>{" | "}
        <Link to="/ad-ideas">Ad Ideas</Link>{" | "}
        <Link to="/auto-messages">Auto Messages</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/competitors" element={<Competitors />} />
        <Route path="/content" element={<ContentHub />} />
        <Route path="/cashlog" element={<CashLog />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/audience" element={<Audience />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/ad-ideas" element={<AdIdeas />} />
        <Route path="/auto-messages" element={<AutoMessages />} />
      </Routes>
    </Router>
  );
}

export default App;