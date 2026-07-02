'use client';

import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import LandingBackground from './LandingBackground';
import LandingLoader from './LandingLoader';
import { useHeroVideoReady } from './useHeroVideoReady';
import './landing.css';

export default function LandingPage() {
  const videoReady = useHeroVideoReady();
  const [loaderHidden, setLoaderHidden] = useState(false);

  return (
    <div className={`landing-page${videoReady ? ' landing-page--ready' : ''}`}>
      <LandingBackground />
      {!loaderHidden && (
        <LandingLoader exiting={videoReady} onExitComplete={() => setLoaderHidden(true)} />
      )}
      <div className="landing-shell">
        <Header />
        <main className="landing-main">
          <Hero mediaReady={videoReady} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
