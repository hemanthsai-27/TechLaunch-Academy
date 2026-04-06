import { placements, testimonials } from '../data/courses';
import PlacementCard from '../components/PlacementCard';
import TestimonialCard from '../components/TestimonialCard';

export default function PlacementsPage() {
  return (
    <div className="page placements-page">
      <div className="page-header">
        <div className="container text-center">
          <h1>Our Placements Speak</h1>
          <p>94% of our students get placed within 3 months of course completion.</p>
        </div>
      </div>

      <section className="section container">
        <h2 className="section-title">Recent Placements</h2>
        <div className="course-grid">
          {placements.map((placement, i) => (
            <PlacementCard key={i} placement={placement} />
          ))}
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">4-Step Placement Process</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-circle">1</div>
              <div className="timeline-content">
                <h4>Training Completion</h4>
                <p>Master the skills with hands-on projects and assignments.</p>
              </div>
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-item">
              <div className="timeline-circle">2</div>
              <div className="timeline-content">
                <h4>Mock Interviews</h4>
                <p>Practice with industry experts to build confidence.</p>
              </div>
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-item">
              <div className="timeline-circle">3</div>
              <div className="timeline-content">
                <h4>Company Referrals</h4>
                <p>Resume sent to our 150+ hiring partners.</p>
              </div>
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-item">
              <div className="timeline-circle">4</div>
              <div className="timeline-content">
                <h4>Job Offer</h4>
                <p>Clear interviews and secure your dream IT job.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">Student Success Stories</h2>
        <div className="testimonials-grid">
          {testimonials.map((test, i) => (
            <TestimonialCard key={i} testimonial={test} />
          ))}
        </div>
      </section>
    </div>
  );
}
