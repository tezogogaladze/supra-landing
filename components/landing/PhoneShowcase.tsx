export default function PhoneShowcase() {
  return (
    <div className="landing-phone-block">
      <div className="landing-phone-wrap">
        <div className="landing-phone-pill" aria-hidden="true" />
        <div className="landing-phone-device">
          <div className="landing-phone-screen">
            <video
              className="landing-phone-video"
              src="/hero-video.mp4"
              autoPlay
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
