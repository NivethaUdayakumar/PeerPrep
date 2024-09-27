import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import QuestionServicePage from './questionservicepage';

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Router>
      <div className="App min-h-screen bg-gray-900 text-white">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-center">Peer Prep</h1>
        </div>
        <Routes>
          <Route path="/questions-page" element={<QuestionServicePage />} />
          {/* Redirect from root to /questions-page (REMOVE LATER) */}
          <Route path="/" element={<Navigate to="/questions-page" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
