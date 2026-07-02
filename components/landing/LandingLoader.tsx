'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

type LandingLoaderProps = {
  exiting: boolean;
  onExitComplete: () => void;
};

export default function LandingLoader({ exiting, onExitComplete }: LandingLoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!exiting) return;

    const node = loaderRef.current;
    if (!node) return;

    const handleTransitionEnd = (event: TransitionEvent) => {
      if (event.propertyName === 'opacity') {
        onExitComplete();
      }
    };

    node.addEventListener('transitionend', handleTransitionEnd);
    return () => node.removeEventListener('transitionend', handleTransitionEnd);
  }, [exiting, onExitComplete]);

  return (
    <div
      ref={loaderRef}
      className={`landing-loader${exiting ? ' landing-loader--exit' : ''}`}
      role="status"
      aria-live="polite"
      aria-busy={!exiting}
      aria-label={exiting ? 'Loading complete' : 'Loading Supra'}
    >
      <div className="landing-loader-inner">
        <Image
          src="/logo-hover.png"
          alt="Supra"
          width={600}
          height={200}
          priority
          className="landing-loader-logo"
        />
        <div className="landing-loader-track" aria-hidden="true">
          <div className="landing-loader-track-fill" />
        </div>
        <p className="landing-loader-text">loading</p>
      </div>
    </div>
  );
}
