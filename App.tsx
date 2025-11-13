
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FooterDecorations from './components/FooterDecorations';

const App: React.FC = () => {
  return (
    // Main container with gradient background and flex layout
    <div className="bg-gradient-to-b from-[#7B2FF7] to-[#00C6FF] min-h-screen text-white font-poppins flex flex-col overflow-hidden relative">
      <Header />
      {/* Main content area that grows to fill available space */}
      <main className="flex-grow flex items-center justify-center z-10">
        <Hero />
      </main>
      <FooterDecorations />
    </div>
  );
};

export default App;
