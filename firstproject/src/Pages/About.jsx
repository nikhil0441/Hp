import React from "react";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Employee Management System</h2>
        <p className="about-description">
          Our Employee Management System (EMS) is a powerful tool designed to
          simplify HR operations, manage employee records, track performance,
          and ensure a seamless workflow within organizations.
        </p>
        <div className="about-features">
          <div className="feature-card">
            <i className="bi bi-person-badge-fill feature-icon"></i>
            <h3 className="feature-title">Employee Records</h3>
            <p className="feature-text">
              Centralized storage of employee details including personal,
              professional, and salary information.
            </p>
          </div>
          <div className="feature-card">
            <i className="bi bi-bar-chart-fill feature-icon"></i>
            <h3 className="feature-title">Performance Tracking</h3>
            <p className="feature-text">
              Monitor and evaluate employee performance with easy-to-understand
              analytics.
            </p>
          </div>
          <div className="feature-card">
            <i className="bi bi-shield-lock feature-icon"></i>
            <h3 className="feature-title">Data Security</h3>
            <p className="feature-text">
              Your data is protected with robust security protocols and
              role-based access control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
