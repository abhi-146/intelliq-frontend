import React, { Component } from 'react';
import FileUpload from './FileUpload';

class ResumeReviewForm extends Component {
  render() {
    return (
      <div className="resume-container">
        <div className="resume-header">
          <h2>Resume Compatibility Check</h2>
        </div>
        <FileUpload/>
      </div>
    );
  }
}

export default ResumeReviewForm;


