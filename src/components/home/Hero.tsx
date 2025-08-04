import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
      {/* Background dog image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2062&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-accent/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-primary/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-secondary/30 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="display-title text-text-primary mb-6">
            Find Your Perfect
            <span className="block text-primary">Furry Companion</span>
          </h1>

          {/* Subtitle */}
          <p className="subtitle text-text-secondary mb-8 max-w-2xl mx-auto">
            At Agnes Pet Shop, we connect loving families with amazing dogs looking for their forever homes. 
            Every adoption changes two lives - yours and theirs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog" className="btn-primary subtitle px-8 py-4">
              Browse Our Dogs
            </Link>
            <Link to="/about" className="btn-secondary subtitle px-8 py-4">
              Learn About Us
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto">
            <div className="text-center">
              <div className="section-heading text-primary">500+</div>
              <div className="small-text text-text-secondary">Dogs Adopted</div>
            </div>
            <div className="text-center">
              <div className="section-heading text-primary">10+</div>
              <div className="small-text text-text-secondary">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="section-heading text-primary">98%</div>
              <div className="small-text text-text-secondary">Happy Families</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;