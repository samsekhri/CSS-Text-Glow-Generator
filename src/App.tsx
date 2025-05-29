import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TextGlowGenerator from './components/TextGlowGenerator';
import Background from './components/Background';
import Documentation from './components/Documentations';
import Tools from './components/Tools'; // Adjust the path if needed

function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col text-white font-sans">
        <Background />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<TextGlowGenerator />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/docs" element={<Documentation />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
