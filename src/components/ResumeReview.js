import React, { Component } from 'react';
import FileUpload from './FileUpload';

class ResumeReviewForm extends Component {
  render() {
    return (
      <div className="resume-container">
        <div className="resume-header">
          <h2>Resume Review</h2>
          <p>Increase your chances for getting shortlisted!</p>
        </div>
        <div className="resume-content">
          <p>To ensure the utmost security of your uploads, we use google forms for resume submissions.</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeEX2BmaI9dY8f80yDbk7VH5vet6i8EnVPQW9tdzOeOv2nSVA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
            <button className="submit-button">Submit Your Resume</button>
          </a>
        </div>
        <FileUpload/>
      </div>
    );
  }
}

export default ResumeReviewForm;


