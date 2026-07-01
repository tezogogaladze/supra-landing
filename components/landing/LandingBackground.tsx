'use client';

import Grainient from '@/components/Grainient/Grainient';

export default function LandingBackground() {
  return (
    <div className="landing-background" aria-hidden="true">
      <Grainient
        color1="#FEF6EE"
        color2="#F0C4B4"
        color3="#C7624B"
        timeSpeed={0.25}
        colorBalance={0.15}
        warpStrength={1.0}
        warpFrequency={5.0}
        warpSpeed={2.0}
        warpAmplitude={50.0}
        blendAngle={0.0}
        blendSoftness={0.05}
        rotationAmount={500.0}
        noiseScale={2.0}
        grainAmount={0.08}
        grainScale={2.0}
        grainAnimated={false}
        contrast={1.35}
        gamma={1.0}
        saturation={1.05}
        centerX={0.0}
        centerY={0.0}
        zoom={0.9}
      />
    </div>
  );
}
