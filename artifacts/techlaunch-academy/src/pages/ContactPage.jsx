import { courses } from '../data/courses';

export default function ContactPage() {
  return (
    <div className="page contact-page">
      <div className="page-header">
        <div className="container text-center">
          <h1>Contact Us</h1>
          <p>We're here to help you take the next step in your career</p>
        </div>
      </div>

      <div className="section container">
        <div className="contact-layout" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px'}}>
          
          <div className="contact-form-container card" style={{padding: '30px'}}>
            <h2 className="section-title" style={{fontSize: '1.5rem', textAlign: 'left', marginBottom: '24px'}}>Send us a Message</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label>Interested Course</label>
                <select required>
                  <option value="">Select a Course</option>
                  {courses.map(c => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="How can we help you?" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{width: '100%'}}>Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            <h2 className="section-title" style={{fontSize: '1.5rem', textAlign: 'left', marginBottom: '24px'}}>Reach Out Directly</h2>
            
            <div className="info-cards" style={{display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px'}}>
              <div className="card info-card" style={{padding: '20px', display: 'flex', alignItems: 'center', gap: '16px'}}>
                <span style={{fontSize: '24px'}}>📍</span>
                <div>
                  <h4 style={{marginBottom: '4px'}}>Address</h4>
                  <p className="text-gray" style={{fontSize: '14px'}}>3rd Floor, Cyber Towers, Ameerpet, Hyderabad - 500016</p>
                </div>
              </div>
              <div className="card info-card" style={{padding: '20px', display: 'flex', alignItems: 'center', gap: '16px'}}>
                <span style={{fontSize: '24px'}}>☎️</span>
                <div>
                  <h4 style={{marginBottom: '4px'}}>Phone / WhatsApp</h4>
                  <p className="text-gray" style={{fontSize: '14px'}}>+91 9876543210</p>
                </div>
              </div>
              <div className="card info-card" style={{padding: '20px', display: 'flex', alignItems: 'center', gap: '16px'}}>
                <span style={{fontSize: '24px'}}>✉️</span>
                <div>
                  <h4 style={{marginBottom: '4px'}}>Email</h4>
                  <p className="text-gray" style={{fontSize: '14px'}}>info@techlaunch.in</p>
                </div>
              </div>
              <div className="card info-card" style={{padding: '20px', display: 'flex', alignItems: 'center', gap: '16px'}}>
                <span style={{fontSize: '24px'}}>🕒</span>
                <div>
                  <h4 style={{marginBottom: '4px'}}>Working Hours</h4>
                  <p className="text-gray" style={{fontSize: '14px'}}>Mon–Sat, 9AM–7PM</p>
                </div>
              </div>
            </div>

            <div className="map-container card" style={{height: '250px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
              <a href="https://www.google.com/maps/search/Ameerpet+Hyderabad" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: '#0A2E5C', fontWeight: 'bold', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'}}>
                <span style={{fontSize: '32px'}}>📍</span>
                Find Us On Map
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
