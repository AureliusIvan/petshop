import React, { useState } from 'react';
import { useAnimation } from '../hooks/useAnimation';

const Contact = () => {
  const { elementRef } = useAnimation('pageEnter');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div ref={elementRef} className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="hero-title text-text-primary mb-4">
            Contact Us
          </h1>
          <p className="subtitle text-text-secondary max-w-2xl mx-auto">
            Have questions about adoption, our services, or need advice about dog care? 
            We're here to help! Get in touch with our friendly team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="card">
              <h2 className="section-heading text-text-primary mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="card-title text-text-primary mb-1">Visit Us</h3>
                    <p className="body-text text-text-secondary">
                      123 Pet Street<br />
                      Jakarta, Indonesia 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="card-title text-text-primary mb-1">Call Us</h3>
                    <p className="body-text text-text-secondary">
                      +62 21 1234 5678<br />
                      Mon-Sat: 9AM-6PM<br />
                      Sun: 10AM-4PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="card-title text-text-primary mb-1">Email Us</h3>
                    <p className="body-text text-text-secondary">
                      info@agnespetshop.com<br />
                      adoption@agnespetshop.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="card mt-6">
              <h3 className="card-title text-text-primary mb-4">Emergency Support</h3>
              <p className="body-text text-text-secondary mb-3">
                For urgent pet emergencies, contact our 24/7 hotline:
              </p>
              <p className="card-title text-primary">+62 21 9999 8888</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card">
              <h2 className="section-heading text-text-primary mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block small-text text-text-secondary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block small-text text-text-secondary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block small-text text-text-secondary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block small-text text-text-secondary mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="adoption">Dog Adoption Inquiry</option>
                      <option value="training">Training Services</option>
                      <option value="grooming">Grooming Services</option>
                      <option value="health">Health & Medical</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block small-text text-text-secondary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-3"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="section-heading text-text-primary mb-4">Frequently Asked Questions</h2>
            <p className="subtitle text-text-secondary max-w-2xl mx-auto">
              Quick answers to common questions about our adoption process and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="card-title text-text-primary mb-3">What is the adoption process?</h3>
              <p className="body-text text-text-secondary">
                Our adoption process includes an application, meet-and-greet, home visit, and final approval. 
                The entire process typically takes 3-7 days to ensure the best match.
              </p>
            </div>

            <div className="card">
              <h3 className="card-title text-text-primary mb-3">What are the adoption fees?</h3>
              <p className="body-text text-text-secondary">
                Adoption fees range from $200-$700 and include vaccinations, microchipping, spaying/neutering, 
                and a health certificate from our veterinarian.
              </p>
            </div>

            <div className="card">
              <h3 className="card-title text-text-primary mb-3">Do you provide training services?</h3>
              <p className="body-text text-text-secondary">
                Yes! We offer basic obedience training, behavioral correction, and advanced training programs. 
                Many adopters take advantage of our post-adoption training support.
              </p>
            </div>

            <div className="card">
              <h3 className="card-title text-text-primary mb-3">Can I return a dog if it doesn't work out?</h3>
              <p className="body-text text-text-secondary">
                We have a 30-day return policy and lifetime support. If there are issues, we work with you 
                first to resolve them, but we'll always take back any dog we've placed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;