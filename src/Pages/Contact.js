import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

function ContactPage() {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact</h1>
      </header>
      <p className="contact-intro">Looking forward to hearing from you!</p>
      <div className="contact-info">
        <p className="contact-item">
          <strong>Contact No:</strong> +91-8310387902
        </p>
        <p className="contact-item">
          <strong>Email:</strong>
          <a href="mailto:iranjanapoojary@gmail.com">
            <FaEnvelope /> iranjanapoojary@gmail.com
          </a>
        </p>
        <p className="contact-item">
          <strong>LinkedIn:</strong>
          <a
            href="https://www.linkedin.com/in/ranjana-salian"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> Ranjana Salian
          </a>
        </p>
        <p className="contact-item">
          <strong>GitHub:</strong>
          <a
            href="https://github.com/ranjanasalian"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> Ranjana Poojary
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactPage;
