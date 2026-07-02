'use client';

import { useEffect, useState } from 'react';

const HERO_VIDEO_SRC = '/hero-video.mp4';
const MAX_WAIT_MS = 12000;

export function useHeroVideoReady() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let finished = false;

    const finish = () => {
      if (cancelled || finished) return;
      finished = true;
      setIsReady(true);
    };

    const video = document.createElement('video');
    video.src = HERO_VIDEO_SRC;
    video.muted = true;
    video.playsInline = true;
    video.preload = 'auto';

    const tryFinish = () => {
      if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
        finish();
      }
    };

    video.addEventListener('canplaythrough', finish);
    video.addEventListener('canplay', tryFinish);
    video.addEventListener('loadeddata', tryFinish);
    video.addEventListener('error', finish);

    const timeout = window.setTimeout(finish, MAX_WAIT_MS);
    video.load();

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      video.removeEventListener('canplaythrough', finish);
      video.removeEventListener('canplay', tryFinish);
      video.removeEventListener('loadeddata', tryFinish);
      video.removeEventListener('error', finish);
      video.removeAttribute('src');
      video.load();
    };
  }, []);

  return isReady;
}
