import Image from 'next/image';
import PhoneShowcase from './PhoneShowcase';

const features = [
  'instant booking confirmation',
  'real-time availability',
  'curated restaurant selection',
];

export default function Hero({ mediaReady = false }: { mediaReady?: boolean }) {
  return (
    <section className="landing-hero">
      <div className="landing-container landing-hero-inner">
        <div className="landing-hero-text">
          <h1>discover and book restaurants</h1>
          <p className="landing-hero-subtitle">the tables you almost missed.</p>
          <ul className="landing-hero-list">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <div className="landing-store-badges">
            <div className="landing-store-badge" aria-label="App Store — Coming Soon">
              <div className="landing-store-badge-visual">
                <Image src="/app-store.png" alt="" width={150} height={45} aria-hidden="true" />
              </div>
              <span className="landing-store-badge-soon">coming soon</span>
            </div>
            <div className="landing-store-badge" aria-label="Google Play — Coming Soon">
              <div className="landing-store-badge-visual">
                <Image src="/google-play.png" alt="" width={152} height={45} aria-hidden="true" />
              </div>
              <span className="landing-store-badge-soon">coming soon</span>
            </div>
          </div>
          <p className="landing-hero-tagline">
            every day, discover the best dining in Georgia — straight from the
            restaurants and food lovers creating here.
          </p>
        </div>
        <PhoneShowcase mediaReady={mediaReady} />
      </div>
    </section>
  );
}
