import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Notifications from "./components/Notifications";

export default function App() {
  return (
    <BrowserRouter>
      {/* 🔔 Notifications (global) */}
      <Notifications />

      {/* 🔗 Navigation */}
      <nav className="nav">
        <Link to="/" className="link">Home</Link>
        <Link to="/stats" className="link">Stats</Link>
      </nav>

      {/* 📄 Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </BrowserRouter>
  );
}
