import Link from 'next/link';
import Image from 'next/image';

export default function ContactHeader() {
  return (
    <header className="landing-header">
      <div className="landing-container landing-header-inner">
        <Link href="/" className="landing-logo">
          <Image src="/logo-hover.png" alt="Supra" width={600} height={200} priority />
        </Link>
        <Link href="/" className="landing-cta-btn">
          Back to Home
        </Link>
      </div>
    </header>
  );
}
