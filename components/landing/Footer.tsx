import type { ReactNode } from 'react';

function SocialIcon({ children, label }: { children: ReactNode; label: string }) {
  return (
    <a href="#" className="landing-footer-social-link" aria-label={label}>
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="landing-footer">
      <div className="landing-container landing-footer-inner">
        <div className="landing-footer-left">
          <div className="landing-footer-socials">
            <SocialIcon label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.5 9.5V7.75c0-.69.56-1.25 1.25-1.25H16V4h-2.04c-1.66 0-3 1.34-3 3v2.5H9v2.75h1.96V20h2.54v-9.25H15l.5-2.75h-2z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="X">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16.6 4h3.1l-6.8 7.8L21 20h-6.2l-4.9-5.7L4.4 20H1.3l7.3-8.4L3 4h6.3l4.4 5.1L16.6 4zm-1.1 14.3h1.7L7.9 5.6H6.1l9.4 12.7z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16.5 5.5c-.9 1.2-2.2 2-3.7 2.2V14a4.5 4.5 0 1 1-4.5-4.5c.3 0 .6 0 .9.1v2.6a1.9 1.9 0 1 0 1.3 1.8V2h2.5c.2 1.2.9 2.2 1.9 2.9.6.4 1.3.6 2.1.6V5.5h-1.5z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8zm4 2.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5zM17.25 7a.75.75 0 1 1-.75.75.75.75 0 0 1 .75-.75z" />
              </svg>
            </SocialIcon>
          </div>
          <a href="mailto:support@supra-booking.com" className="landing-footer-email">
            support@supra-booking.com
          </a>
        </div>

        <span className="landing-footer-copyright">
          All Rights Reserved ©{new Date().getFullYear()}
        </span>

        <div className="landing-footer-legal">
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Community Guidelines</a>
        </div>
      </div>
    </footer>
  );
}
