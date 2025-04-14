import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Employee Management Inc. All Rights Reserved.</p>
        <nav>
          <a href="/home">Home</a> | <a href="/about">About</a> |{" "}
          <a href="/contact">Contact</a>
        </nav>
        <div className="social-links">
          <a
            href="https://twitter.com/company"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/company"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
