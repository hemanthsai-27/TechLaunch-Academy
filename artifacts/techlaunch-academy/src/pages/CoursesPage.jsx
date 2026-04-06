import { useState } from 'react';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [search, setSearch] = useState('');
  
  const domains = ['All', ...new Set(courses.map(c => c.domain))];
  
  const filteredCourses = courses.filter(c => {
    const matchesTab = activeTab === 'All' || c.domain === activeTab;
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="page courses-page">
      <div className="page-header">
        <div className="container text-center">
          <h1>All Courses</h1>
          <p>Find the perfect program to accelerate your IT career</p>
        </div>
      </div>
      
      <div className="section container">
        <div className="course-filters">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search courses..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
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
        </div>
        
        <p className="results-count">Showing {filteredCourses.length} courses</p>
        
        <div className="course-grid">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
