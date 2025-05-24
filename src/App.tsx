import React from 'react';
import { ScrollText } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Implementation from './components/Implementation';
import Impact from './components/Impact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-blue-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Implementation />
        <Impact />
      </main>
      <Footer />
      
      {/* Floating scroll indicator */}
      <div className="fixed bottom-6 right-6 bg-emerald-600 text-white p-3 rounded-full shadow-lg animate-bounce hidden md:flex">
        <ScrollText size={24} />
      </div>
    </div>
  );
}

export default App;