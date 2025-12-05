'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    restaurantName: '',
    contactPerson: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
        maxWidth: '600px',
        margin: '0 auto',
        padding: '4rem 2rem'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '700',
          marginBottom: '1rem',
          color: '#fee1c4'
        }}>
          For Restaurants
        </h1>

        <p style={{
          fontSize: '1.125rem',
          lineHeight: '1.8',
          marginBottom: '3rem',
          color: '#fee1c4',
          opacity: 0.9
        }}>
          Join hundreds of restaurants in Georgia using Supra to manage reservations 
          and grow their business. Fill out the form below and we'll get in touch.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} style={{ marginBottom: '3rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label 
              htmlFor="restaurantName"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: '#fee1c4'
              }}
            >
              Restaurant Name *
            </label>
            <input
              type="text"
              id="restaurantName"
              name="restaurantName"
              value={formData.restaurantName}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.875rem',
                background: 'rgba(254, 225, 196, 0.1)',
                border: '1px solid #fee1c4',
                borderRadius: '8px',
                color: '#fee1c4',
                fontSize: '1rem',
                fontFamily: "'Satoshi', sans-serif"
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label 
              htmlFor="contactPerson"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: '#fee1c4'
              }}
            >
              Contact Person *
            </label>
            <input
              type="text"
              id="contactPerson"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.875rem',
                background: 'rgba(254, 225, 196, 0.1)',
                border: '1px solid #fee1c4',
                borderRadius: '8px',
                color: '#fee1c4',
                fontSize: '1rem',
                fontFamily: "'Satoshi', sans-serif"
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label 
              htmlFor="email"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: '#fee1c4'
              }}
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.875rem',
                background: 'rgba(254, 225, 196, 0.1)',
                border: '1px solid #fee1c4',
                borderRadius: '8px',
                color: '#fee1c4',
                fontSize: '1rem',
                fontFamily: "'Satoshi', sans-serif"
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label 
              htmlFor="phone"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: '#fee1c4'
              }}
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.875rem',
                background: 'rgba(254, 225, 196, 0.1)',
                border: '1px solid #fee1c4',
                borderRadius: '8px',
                color: '#fee1c4',
                fontSize: '1rem',
                fontFamily: "'Satoshi', sans-serif"
              }}
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label 
              htmlFor="message"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: '#fee1c4'
              }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              style={{
                width: '100%',
                padding: '0.875rem',
                background: 'rgba(254, 225, 196, 0.1)',
                border: '1px solid #fee1c4',
                borderRadius: '8px',
                color: '#fee1c4',
                fontSize: '1rem',
                fontFamily: "'Satoshi', sans-serif",
                resize: 'vertical'
              }}
              placeholder="Tell us about your restaurant..."
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '1rem',
              background: '#fee1c4',
              color: '#051011',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: "'Satoshi', sans-serif",
              transition: 'opacity 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            Submit Application
          </button>
        </form>

        {/* Back Button */}
        <Link 
          href="/"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            background: 'transparent',
            color: '#fee1c4',
            textDecoration: 'none',
            border: '1px solid #fee1c4',
            borderRadius: '8px',
            fontWeight: '600',
            transition: 'background 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(254, 225, 196, 0.1)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >
          ← Back to Home
        </Link>
      </main>
    </div>
  );
}

