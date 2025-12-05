'use client';

import FlowingMenu from '@/components/FlowingMenu';

const demoItems = [
  { link: '/about', text: '', image: '/logo-hover.png', logo: '/logo.png' },
  { link: '#', text: 'iOS', image: '/app-store.png' },
  { link: '#', text: 'Android', image: '/google-play.png' },
  { link: '/contact', text: 'For Restaurants', image: '/contact-us.png' }
];

export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: '#051011',
      padding: '40px'
    }}>
      <div style={{ height: '400px', width: '100%', position: 'relative' }}>
        <FlowingMenu items={demoItems} />
        </div>
    </div>
  );
}
