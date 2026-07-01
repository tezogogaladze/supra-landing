import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import LandingBackground from './LandingBackground';
import './landing.css';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <LandingBackground />
      <div className="landing-shell">
        <Header />
        <main className="landing-main">
          <Hero />
        </main>
        <Footer />
      </div>
    </div>
  );
}
