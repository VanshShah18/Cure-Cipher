import React, { useState } from 'react';
import { Brain, Upload, Utensils, Activity, HeartPulse } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-brand">
            <Brain className="nav-logo" size={32} />
            <span className="nav-title">Sephina</span>
          </div>
          <div className="nav-links">
            <button 
              onClick={() => setActiveTab('home')}
              className={`nav-button ${activeTab === 'home' ? 'active' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => setActiveTab('diagnosis')}
              className={`nav-button ${activeTab === 'diagnosis' ? 'active' : ''}`}
            >
              Diagnosis
            </button>
            <button 
              onClick={() => setActiveTab('nutrition')}
              className={`nav-button ${activeTab === 'nutrition' ? 'active' : ''}`}
            >
              Nutrition
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {activeTab === 'home' && (
        <>
          <section className="hero">
            <video 
              className="hero-video"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="https://youtu.be/VFG0OmbPZSs?si=x7Jhs3kbKMhMQnzo" type="video/mp4" />
            </video>
            <div className="hero-content">
              <h1 className="hero-title">AI-Powered Healthcare for Everyone</h1>
              <p className="hero-description">
                Sephina uses advanced AI to provide accessible medical assistance and personalized nutrition guidance, 
                helping reduce health disparities across the globe.
              </p>
            </div>
          </section>

          <div className="features">
            <div className="feature-card">
              <div className="feature-header">
                <HeartPulse className="feature-icon" size={32} />
                <h3 className="feature-title">AI Diagnosis</h3>
              </div>
              <p className="feature-description">
                Upload medical images for AI-powered analysis and get preliminary diagnoses with high accuracy.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-header">
                <Utensils className="feature-icon" size={32} />
                <h3 className="feature-title">Nutrition Plans</h3>
              </div>
              <p className="feature-description">
                Receive personalized nutrition guidance based on your health status, local diet, and economic conditions.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-header">
                <Activity className="feature-icon" size={32} />
                <h3 className="feature-title">Health Tracking</h3>
              </div>
              <p className="feature-description">
                Monitor your health progress and get insights to improve your well-being over time.
              </p>
            </div>
          </div>
        </>
      )}

      {activeTab === 'diagnosis' && (
        <div className="diagnosis">
          <div className="diagnosis-container">
            <h2 className="feature-title">AI Medical Diagnosis</h2>
            <div className="upload-area">
              <Upload size={48} className="feature-icon" />
              <p className="feature-description">Upload your medical images (X-rays, CT scans, etc.)</p>
              <button className="button">Select Files</button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'nutrition' && (
        <div className="nutrition">
          <div className="nutrition-container">
            <h2 className="feature-title">Personalized Nutrition Planning</h2>
            <form>
              <div className="form-group">
                <label className="form-label">Height (cm)</label>
                <input type="number" className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Weight (kg)</label>
                <input type="number" className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Dietary Restrictions</label>
                <select className="form-select">
                  <option>None</option>
                  <option>Vegetarian</option>
                  <option>Vegan</option>
                  <option>Gluten-free</option>
                  <option>Dairy-free</option>
                </select>
              </div>
              <button type="submit" className="button">
                Generate Nutrition Plan
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Sephina AI Medical Assistant. All rights reserved.</p>
          <p>Improving healthcare accessibility through artificial intelligence.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;