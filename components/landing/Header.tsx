import Link from 'next/link';
import Image from 'next/image';

const APP_STORE_URL = '#';

export default function Header() {
  return (
    <header className="landing-header">
      <div className="landing-container landing-header-inner">
        <Link href="/" className="landing-logo">
          <Image src="/logo-hover.png" alt="Supra" width={600} height={200} priority />
        </Link>
        <a href={APP_STORE_URL} className="landing-cta-btn">
          <span>Get The App</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" fill="none" aria-hidden="true">
            <path d="M6.87158 13H19.1281" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.9998 6.87174V19.1283" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </header>
  );
}
