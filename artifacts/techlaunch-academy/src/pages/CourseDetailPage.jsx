import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';

export default function CourseDetailPage() {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return <div className="container section text-center"><h2>Course not found</h2><Link to="/courses">Back to Courses</Link></div>;
  }

  const syllabus = [
    { title: "Module 1: Introduction & Basics", topics: ["Overview", "Setup & Installation", "Core Concepts", "First Project"] },
    { title: "Module 2: Advanced Topics", topics: ["Deep Dive", "Best Practices", "Design Patterns", "Performance"] },
    { title: "Module 3: Real-world Applications", topics: ["Building a Clone", "API Integration", "State Management"] },
    { title: "Module 4: Testing & Deployment", topics: ["Unit Testing", "CI/CD", "Cloud Deployment", "Monitoring"] },
    { title: "Module 5: Interview Prep", topics: ["Resume Building", "Mock Interviews", "Portfolio Review"] },
  ];

  return (
    <div className="page course-detail-page">
      <div className="container section">
        <div className="course-detail-layout">
          <div className="course-main-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link> &gt; <Link to="/courses">Courses</Link> &gt; <span>{course.name}</span>
            </div>
            
            <span className={`domain-badge domain-${course.domain.replace(/\s+/g, '-').toLowerCase()}`}>
              {course.domain}
            </span>
            <h1 className="detail-title">{course.name}</h1>
            
            <div className="detail-meta">
              <span className="stars">{'★'.repeat(Math.round(course.rating))}</span>
              <span>{course.rating} ({course.reviews} reviews)</span>
            </div>
            
            <div className="card trainer-info">
              <div className="trainer-avatar">{course.trainer.charAt(4) || 'T'}</div>
              <div>
                <h4>{course.trainer}</h4>
                <p>Lead Instructor • 10+ Years Experience</p>
              </div>
            </div>
            
            <h3 className="section-subtitle" style={{textAlign: 'left', marginTop: '40px', marginBottom: '20px'}}>Course Syllabus</h3>
            <div className="syllabus-accordion">
              {syllabus.map((mod, i) => (
                <div key={i} className="accordion-item card">
                  <h4 className="accordion-title">{mod.title}</h4>
                  <ul className="accordion-content">
                    {mod.topics.map((t, j) => <li key={j}>{t}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            
            <h3 className="section-subtitle" style={{textAlign: 'left', marginTop: '40px', marginBottom: '20px'}}>Student Reviews</h3>
            <div className="reviews-list">
              <div className="card review-card">
                <div className="stars">★★★★★</div>
                <p>"Excellent content and teaching style. The real-world projects helped me a lot."</p>
                <strong>- Student A</strong>
              </div>
              <div className="card review-card">
                <div className="stars">★★★★☆</div>
                <p>"Very comprehensive syllabus. The placement assistance is genuine."</p>
                <strong>- Student B</strong>
              </div>
            </div>
          </div>
          
          <div className="course-sidebar">
            <div className="card enroll-card sticky-card">
              <h3 className="text-green text-center">₹FREE Demo Class</h3>
              <ul className="enroll-highlights">
                <li><strong>Next Batch:</strong> {course.nextBatch}</li>
                <li><strong>Duration:</strong> {course.duration}</li>
                <li><strong>Mode:</strong> {course.mode}</li>
              </ul>
              
              <form className="enroll-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input type="text" placeholder="Full Name" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Message (Optional)" rows="3"></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{width: '100%'}}>Enroll Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
