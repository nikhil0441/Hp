import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Employee Management System</h3>
          <p>Empowering HR teams with smart and secure employee solutions.</p>
        </div>

        <div className="footer-center">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Contact</h4>
          <p>Email: support@emsystem.com</p>
          <p>Phone: +91 98765 43210</p>
          <div className="footer-icons">
            <a href="#">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Employee Management System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
