import { useState } from 'react';
import { Link } from 'react-router-dom';
import { courses, placements, testimonials, hiringPartners } from '../data/courses';
import CourseCard from '../components/CourseCard';
import PlacementCard from '../components/PlacementCard';
import TestimonialCard from '../components/TestimonialCard';
import StatCounter from '../components/StatCounter';
import WhatsAppButton from '../components/WhatsAppButton';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('All');
  
  const domains = ['All', ...new Set(courses.map(c => c.domain))];
  
  const filteredCourses = activeTab === 'All' 
    ? courses 
    : courses.filter(c => c.domain === activeTab);

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Launch Your IT Career with Expert Training</h1>
          <p className="hero-subtitle">Join 3500+ students who got placed in top MNCs through hands-on, job-ready programs.</p>
          <div className="hero-buttons">
            <Link to="/courses" className="btn-primary">Explore Courses</Link>
            <Link to="/placements" className="btn-outline" style={{borderColor: 'white', color: 'white'}}>View Placements</Link>
          </div>
          <div className="hero-stats">
            <StatCounter end={3500} suffix="+" label="Students Trained" />
            <StatCounter end={94} suffix="%" label="Placement Rate" />
            <StatCounter end={7} suffix="+" label="Years Experience" />
            <StatCounter end={40} suffix="+" label="Active Courses" />
          </div>
        </div>
      </section>

      {/* 2. Featured Courses Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Our Top Courses</h2>
          <div className="tabs">
            {domains.map(domain => (
              <button 
                key={domain} 
                className={`tab-btn ${activeTab === domain ? 'active' : ''}`}
                onClick={() => setActiveTab(domain)}
              >
                {domain}
              </button>
            ))}
          </div>
          <div className="course-grid">
            {filteredCourses.slice(0, 8).map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center" style={{marginTop: '40px'}}>
            <Link to="/courses" className="btn-outline">View All Courses</Link>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="card feature-card">
              <div className="feature-icon">&#123; &#125;</div>
              <h3>Real-Time Projects</h3>
              <p>Work on industry-grade projects with real-world datasets and tools used by top companies.</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">&#127891;</div>
              <h3>Expert Trainers</h3>
              <p>Learn from certified professionals with 8–15 years of corporate experience.</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">&#128188;</div>
              <h3>Job Placement Support</h3>
              <p>Dedicated placement team with 150+ hiring partners. 94% placement rate achieved.</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">&#128197;</div>
              <h3>Flexible Learning</h3>
              <p>Online, offline, weekend, and hybrid batches to suit your schedule and location.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Placed Students Strip */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Our Students Work At Top Companies</h2>
          <div className="placements-strip">
            {placements.map((placement, i) => (
              <PlacementCard key={i} placement={placement} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What Our Students Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((test, i) => (
              <TestimonialCard key={i} testimonial={test} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Hiring Partners Marquee */}
      <section className="section bg-light overflow-hidden">
        <div className="container">
          <h2 className="section-title">Our Hiring Partners</h2>
          <div className="marquee-container">
            <div className="marquee-track">
              {[...hiringPartners, ...hiringPartners].map((partner, i) => (
                <div key={i} className="partner-badge">{partner}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contact CTA */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2 className="section-title text-white">Ready to Start Your Career?</h2>
          <p className="section-subtitle text-white">Take the first step. Our counselors will help you choose the right course.</p>
          <div className="cta-buttons">
            <a href="tel:+919876543210" className="btn-outline" style={{borderColor: 'white', color: 'white'}}>+91 9876543210</a>
            <Link to="/contact" className="btn-primary">Enroll Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
