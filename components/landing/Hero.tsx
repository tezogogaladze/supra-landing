import Image from 'next/image';
import PhoneShowcase from './PhoneShowcase';

const APP_STORE_URL = '#';
const PLAY_STORE_URL = '#';

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
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Image src="/app-store.png" alt="Download on the App Store" width={150} height={45} />
            </a>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Image src="/google-play.png" alt="Get it on Google Play" width={152} height={45} />
            </a>
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
