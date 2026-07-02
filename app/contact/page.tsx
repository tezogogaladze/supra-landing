'use client';

import { useState } from 'react';
import LandingBackground from '@/components/landing/LandingBackground';
import Footer from '@/components/landing/Footer';
import ContactHeader from '@/components/contact/ContactHeader';
import '@/components/landing/landing.css';
import '@/components/contact/contact.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    restaurantName: '',
    contactPerson: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          restaurantName: '',
          contactPerson: '',
          email: '',
          phone: '',
          message: '',
        });
        alert('Thank you for your interest! We will contact you soon.');
      } else {
        alert(
          'There was an error sending your message. Please try again or email us directly at support@supra-booking.com',
        );
      }
    } catch {
      alert(
        'There was an error sending your message. Please try again or email us directly at support@supra-booking.com',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
