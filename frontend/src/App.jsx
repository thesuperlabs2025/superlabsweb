import React, { useState, useEffect } from 'react'
import './index.css'

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Target date 4 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 4);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app-container">
      <div className="mesh-container"></div>
      
      <main className="glass-card">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <img src="https://superlabsgarments.in/images/superlabs-logo.jpg" alt="Superlabs" style={{ height: '80px', borderRadius: '12px' }} />
        </div>
        <span className="badge" style={{ marginBottom: '1.5rem' }}>Coming Soon</span>
        <h1>Customized ERP Solutions.</h1>
        <p>Something extraordinary is in the works. We are building the next generation of creative ERP digital solutions, customized to your business needs. Stay tuned.</p>
        
        <div className="countdown">
          <div className="countdown-item">
            <span className="number">{timeLeft.days}</span>
            <span className="label">Days</span>
          </div>
          <div className="countdown-item">
            <span className="number">{timeLeft.hours}</span>
            <span className="label">Hours</span>
          </div>
          <div className="countdown-item">
            <span className="number">{timeLeft.minutes}</span>
            <span className="label">Mins</span>
          </div>
          <div className="countdown-item">
            <span className="number">{timeLeft.seconds}</span>
            <span className="label">Secs</span>
          </div>
        </div>

        <div className="social-links">
          <a href="https://www.instagram.com/the_superlabs?igsh=MTA4Yzd6ajdwMmw5dw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </main>
    </div>
  )
}

export default App
