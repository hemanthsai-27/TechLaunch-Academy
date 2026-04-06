import { useEffect, useRef, useState } from 'react';

export default function StatCounter({ end, suffix, label }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let startTime;
        const duration = 2000;
        
        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          setCount(Math.floor(progress * end));
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end]);

  return (
    <div className="stat-counter" ref={counterRef}>
      <div className="stat-number">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
