import { Link } from 'react-router-dom';

export default function CourseCard({ course }) {
  return (
    <div className="card course-card">
      <div className="course-card-header">
        <span className={`domain-badge domain-${course.domain.replace(/\s+/g, '-').toLowerCase()}`}>
          {course.domain}
        </span>
        <span className="duration-badge">{course.duration}</span>
      </div>
      <div className="course-card-body">
        <h3 className="course-title">{course.name}</h3>
        <p className="course-trainer">Trainer: {course.trainer}</p>
        <div className="course-rating">
          <span className="stars">{'★'.repeat(Math.round(course.rating))}</span>
          <span className="rating-text">{course.rating} ({course.reviews} reviews)</span>
        </div>
        <p className="course-mode">{course.mode}</p>
        <p className="course-batch">Next Batch: <span className="text-green">{course.nextBatch}</span></p>
      </div>
      <div className="course-card-footer">
        <Link to={`/courses/${course.id}`} className="btn-outline" style={{width: '100%', textAlign: 'center', display: 'block'}}>Enroll Now</Link>
      </div>
    </div>
  );
}
