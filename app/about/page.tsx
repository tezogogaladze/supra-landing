'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#051011',
      color: '#fee1c4',
      fontFamily: "'Satoshi', sans-serif"
    }}>
      {/* Header */}
      <header style={{
        padding: '2rem',
        borderBottom: '0.5px solid #fee1c4'
      }}>
        <Link href="/" style={{ 
          display: 'inline-block',
          textDecoration: 'none'
        }}>
          <Image 
            src="/logo.png" 
            alt="Supra Logo" 
            width={190} 
            height={60}
            style={{ objectFit: 'contain' }}
          />
        </Link>
      </header>

      {/* Content */}
      <main style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '4rem 2rem'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '700',
          marginBottom: '2rem',
          color: '#fee1c4'
        }}>
          About Supra
        </h1>

        <div style={{
          fontSize: '1.125rem',
          lineHeight: '1.8',
          color: '#fee1c4',
          opacity: 0.9
        }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Supra is revolutionizing the way people discover and book restaurants in Georgia. 
            We believe that finding and reserving a great table should be simple, instant, and delightful.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Named after the Georgian tradition of Supra – a traditional feast and gathering – 
            our platform brings together diners and restaurants in a modern, seamless experience.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Whether you're planning a romantic dinner, a business lunch, or a celebration with friends, 
            Supra helps you find the perfect spot and secure your table in seconds.
          </p>

          <h2 style={{
            fontSize: '2rem',
            fontWeight: '600',
            marginTop: '3rem',
            marginBottom: '1.5rem',
            color: '#fee1c4'
          }}>
            Our Mission
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            To connect food lovers with the best dining experiences Georgia has to offer, 
            making restaurant reservations effortless and accessible to everyone.
          </p>

          <h2 style={{
            fontSize: '2rem',
            fontWeight: '600',
            marginTop: '3rem',
            marginBottom: '1.5rem',
            color: '#fee1c4'
          }}>
            Why Supra?
          </h2>

          <ul style={{
            listStyle: 'none',
            padding: 0,
            marginBottom: '2rem'
          }}>
            <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>✓</span>
              Instant booking confirmation
            </li>
            <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>✓</span>
              Real-time availability
            </li>
            <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>✓</span>
              Curated restaurant selection
            </li>
            <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>✓</span>
              Easy table management
            </li>
            <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>✓</span>
              Exclusive deals and offers
            </li>
          </ul>
        </div>

        {/* Back Button */}
        <Link 
          href="/"
          style={{
            display: 'inline-block',
            marginTop: '3rem',
            padding: '1rem 2rem',
            background: '#fee1c4',
            color: '#051011',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            transition: 'opacity 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          ← Back to Home
        </Link>
      </main>
    </div>
  );
}

