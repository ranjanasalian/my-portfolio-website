import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";

function FooterPage() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
        <div className="social-media">
          <a
            href="https://github.com/ranjanasalian"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ranjana-salian"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterPage;
