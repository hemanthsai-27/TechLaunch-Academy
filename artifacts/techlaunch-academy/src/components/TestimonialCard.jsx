export default function TestimonialCard({ testimonial }) {
  return (
    <div className="card testimonial-card">
      <div className="testimonial-stars">{'★'.repeat(testimonial.stars)}</div>
      <p className="testimonial-text">"{testimonial.text}"</p>
      <div className="testimonial-author">
        <h4 className="testimonial-name">{testimonial.name}</h4>
        <p className="testimonial-course">{testimonial.course}</p>
      </div>
    </div>
  );
}
