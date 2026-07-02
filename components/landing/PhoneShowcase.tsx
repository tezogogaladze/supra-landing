'use client';

import { useEffect, useRef } from 'react';

type PhoneShowcaseProps = {
  mediaReady?: boolean;
};

export default function PhoneShowcase({ mediaReady = false }: PhoneShowcaseProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!mediaReady || !videoRef.current) return;
    void videoRef.current.play().catch(() => {});
  }, [mediaReady]);

  return (
    <div className="landing-phone-block">
      <div className="landing-phone-wrap">
        <div className="landing-phone-pill" aria-hidden="true" />
        <div className="landing-phone-device">
          <div className="landing-phone-screen">
            <video
              ref={videoRef}
              className="landing-phone-video"
              src="/hero-video.mp4"
              width={1206}
              height={2622}
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Supra app booking demo"
            />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-phone.png"
            alt=""
            width={1359}
            height={2736}
            className="landing-phone-frame-img"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
