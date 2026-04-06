import StatCounter from '../components/StatCounter';

export default function AboutPage() {
  return (
    <div className="page about-page">
      <div className="page-header">
        <div className="container text-center">
          <h1>About TechLaunch Academy</h1>
          <p>Hands-on Training. Real Placements.</p>
        </div>
      </div>

      <section className="section container text-center max-w-3xl" style={{maxWidth: '800px', margin: '0 auto'}}>
        <h2 className="section-title">Our Mission</h2>
        <p className="text-lg text-gray" style={{fontSize: '18px', lineHeight: '1.6'}}>
          We bridge the gap between academic learning and industry requirements. Our mission is to transform students and career-changers into confident, job-ready IT professionals through rigorous, practical training and dedicated placement support.
        </p>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="hero-stats text-dark" style={{color: '#1A1A2E'}}>
            <StatCounter end={3500} suffix="+" label="Students Trained" />
            <StatCounter end={94} suffix="%" label="Placement Rate" />
            <StatCounter end={7} suffix="+" label="Years Experience" />
            <StatCounter end={40} suffix="+" label="Active Courses" />
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="two-col-layout" style={{display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap'}}>
          <div style={{flex: '1', minWidth: '300px'}}>
            <h2 className="section-title" style={{textAlign: 'left'}}>Why We Started</h2>
            <p style={{marginBottom: '16px', lineHeight: '1.6'}}>
              Founded in 2018 in Ameerpet, Hyderabad, TechLaunch Academy was born out of a simple observation: thousands of graduates were struggling to find jobs not because of a lack of potential, but due to a lack of practical skills.
            </p>
            <p style={{lineHeight: '1.6'}}>
              We created a curriculum focused entirely on real-world projects, identical to what developers build in actual tech companies. Seven years later, our alumni are working in top MNCs across the globe.
            </p>
          </div>
          <div style={{flex: '1', minWidth: '300px'}}>
            <div className="card p-6 bg-navy text-white" style={{backgroundColor: '#0A2E5C', color: 'white', padding: '40px', borderRadius: '10px'}}>
              <h3>Milestones</h3>
              <ul style={{listStyle: 'none', padding: 0, marginTop: '20px'}}>
                <li style={{marginBottom: '15px'}}><strong>2018:</strong> Inception with 2 courses</li>
                <li style={{marginBottom: '15px'}}><strong>2020:</strong> Reached 1000 placements</li>
                <li style={{marginBottom: '15px'}}><strong>2022:</strong> Launched advanced AI/ML programs</li>
                <li style={{marginBottom: '15px'}}><strong>2026:</strong> Empowering 3500+ careers globally</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Leadership Team</h2>
          <div className="team-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
            <div className="card text-center" style={{padding: '30px 20px'}}>
              <div className="team-avatar" style={{width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#0A2E5C', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', margin: '0 auto 16px'}}>R</div>
              <h4>Rahul Sharma</h4>
              <p className="text-gray">Director</p>
            </div>
            <div className="card text-center" style={{padding: '30px 20px'}}>
              <div className="team-avatar" style={{width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#F97316', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', margin: '0 auto 16px'}}>A</div>
              <h4>Anitha Reddy</h4>
              <p className="text-gray">Placement Head</p>
            </div>
            <div className="card text-center" style={{padding: '30px 20px'}}>
              <div className="team-avatar" style={{width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#10B981', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', margin: '0 auto 16px'}}>K</div>
              <h4>Karthik Rao</h4>
              <p className="text-gray">Lead Trainer</p>
            </div>
            <div className="card text-center" style={{padding: '30px 20px'}}>
              <div className="team-avatar" style={{width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#6B7280', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', margin: '0 auto 16px'}}>S</div>
              <h4>Sneha Iyer</h4>
              <p className="text-gray">Admin & Operations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
