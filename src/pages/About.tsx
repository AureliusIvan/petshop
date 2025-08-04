import React from 'react';
import { useAnimation } from '../hooks/useAnimation';
import { mockData } from '../data/mockData';

const About = () => {
  const { elementRef } = useAnimation('pageEnter');

  return (
    <div ref={elementRef} className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="hero-title text-text-primary mb-6">
              About Agnes Pet Shop
            </h1>
            <p className="subtitle text-text-secondary max-w-3xl mx-auto">
              For over a decade, we've been dedicated to connecting loving families with their perfect furry companions. 
              Our mission is to ensure every dog finds a loving forever home.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading text-text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-text-secondary">
                <p>
                  Agnes Pet Shop was founded in 2015 with a simple yet powerful mission: to rescue, rehabilitate, 
                  and rehome dogs in need while connecting them with loving families. What started as a small 
                  operation has grown into one of the most trusted pet adoption centers in the region.
                </p>
                <p>
                  Our founder, Agnes Martinez, was inspired to start this journey after rescuing her own dog, 
                  Max, from a difficult situation. She realized that there were countless other dogs who needed 
                  the same chance at happiness and love that Max received.
                </p>
                <p>
                  Today, we've successfully placed over 500 dogs into loving homes, and each adoption story 
                  reminds us why we do what we do. We believe that every dog deserves a second chance, 
                  and every family deserves the unconditional love that only a dog can provide.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop" 
                alt="Dog adoption center" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading text-text-primary mb-4">Our Mission & Values</h2>
            <p className="subtitle text-text-secondary max-w-2xl mx-auto">
              Everything we do is guided by our core values and commitment to animal welfare.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="card-title text-text-primary mb-3">Compassion</h3>
              <p className="body-text text-text-secondary">
                We treat every animal with love, respect, and dignity, ensuring their physical and emotional well-being.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="card-title text-text-primary mb-3">Trust</h3>
              <p className="body-text text-text-secondary">
                We build lasting relationships with our adoptive families through transparency, honesty, and ongoing support.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="card-title text-text-primary mb-3">Excellence</h3>
              <p className="body-text text-text-secondary">
                We maintain the highest standards in animal care, health screening, and adoption processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading text-text-primary mb-4">Meet Our Team</h2>
            <p className="subtitle text-text-secondary max-w-2xl mx-auto">
              Our dedicated team of professionals is passionate about animal welfare and committed to finding the perfect match for every dog and family.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockData.teamMembers.map((member) => (
              <div key={member.id} className="card text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="card-title text-text-primary mb-1">{member.name}</h3>
                <p className="body-text text-primary mb-2">{member.position}</p>
                <p className="small-text text-text-secondary mb-3">{member.experience} • {member.specialization}</p>
                <p className="small-text text-text-secondary">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="section-heading mb-12">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="hero-title mb-2">500+</div>
                <div className="subtitle opacity-90">Dogs Adopted</div>
              </div>
              <div>
                <div className="hero-title mb-2">98%</div>
                <div className="subtitle opacity-90">Success Rate</div>
              </div>
              <div>
                <div className="hero-title mb-2">10+</div>
                <div className="subtitle opacity-90">Years Experience</div>
              </div>
              <div>
                <div className="hero-title mb-2">24/7</div>
                <div className="subtitle opacity-90">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading text-text-primary mb-4">Ready to Find Your Perfect Companion?</h2>
          <p className="subtitle text-text-secondary mb-8 max-w-2xl mx-auto">
            Browse our available dogs or get in touch with our team to learn more about the adoption process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/catalog" className="btn-primary text-lg px-8 py-3">Browse Available Dogs</a>
            <a href="/contact" className="btn-secondary text-lg px-8 py-3">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;