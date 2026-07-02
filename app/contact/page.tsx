'use client';

import { useState } from 'react';
import LandingBackground from '@/components/landing/LandingBackground';
import Footer from '@/components/landing/Footer';
import ContactHeader from '@/components/contact/ContactHeader';
import '@/components/landing/landing.css';
import '@/components/contact/contact.css';

type FormStatus = 'idle' | 'success' | 'error';

const emptyForm = {
  restaurantName: '',
  contactPerson: '',
  email: '',
  phone: '',
  message: '',
};

export default function ContactPage() {
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    const form = e.currentTarget;
    const botcheck = (form.elements.namedItem('botcheck') as HTMLInputElement)?.checked ?? false;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, botcheck }),
      });

      if (response.ok) {
        setFormData(emptyForm);
        form.reset();
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStatus('idle');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-page">
      <LandingBackground />
      <div className="contact-shell">
        <ContactHeader />
        <main className="contact-main">
          <div className="contact-layout">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="checkbox"
                name="botcheck"
                className="contact-honeypot"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="contact-form-grid">
                <div className="contact-field">
                  <label htmlFor="restaurantName" className="contact-label">
                    Restaurant Name *
                  </label>
                  <input
                    type="text"
                    id="restaurantName"
                    name="restaurantName"
                    className="contact-input"
                    value={formData.restaurantName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contactPerson" className="contact-label">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    className="contact-input"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email" className="contact-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="contact-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="phone" className="contact-label">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="contact-input"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field contact-field--full">
                  <label htmlFor="message" className="contact-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="contact-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your restaurant..."
                  />
                </div>

                {status === 'success' && (
                  <p className="contact-status contact-status--success contact-field--full" role="status">
                    Thank you for your interest! We will contact you soon.
                  </p>
                )}

                {status === 'error' && (
                  <p className="contact-status contact-status--error contact-field--full" role="alert">
                    Something went wrong. Please try again or email{' '}
                    <a href="mailto:support@supra-booking.com">support@supra-booking.com</a>.
                  </p>
                )}

                <div className="contact-field contact-field--full">
                  <button type="submit" className="contact-submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Submit Application'}
                  </button>
                </div>
              </div>
            </form>

            <div className="contact-intro-col">
              <h1 className="contact-title">For Restaurants</h1>
              <p className="contact-intro">
                Join hundreds of restaurants in Georgia using Supra to manage reservations and grow
                their business. Fill out the form below and we&apos;ll get in touch.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
