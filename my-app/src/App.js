import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import FinancialDashboard from "./FinancialDashboard";
import ChatBot from "./Chatbot";
import VideoPage from "./VideoPage";
// import Settings from "./pages/Settings";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FinancialDashboard />} />
          <Route path="Chatbot" element={<ChatBot />} />
            <Route path="Education" element={<VideoPage />} />
          {/* <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}
