import React, { Component } from 'react';
import '../Home.css';

class Home extends Component {
  render() {
    return (
      <div className="intelliq-home">
        <header className="intelliq-header">
          <h1>Welcome to IntelliQ</h1>
          <p>Master your tech interviews with mock sessions from experienced software developers.</p>
        </header>

        <section className="intelliq-features">
          <h2>Why Choose IntelliQ?</h2>
          <div className="feature">
            <h3>Real-world Scenarios</h3>
            <p>Engage in mock interviews that simulate actual job interviews, helping you be better prepared.</p>
          </div>
          <div className="feature">
            <h3>Feedback from Experts</h3>
            <p>Receive constructive feedback from experienced software developers to help you improve.</p>
          </div>
          <div className="feature">
            <h3>Flexible Scheduling</h3>
            <p>Choose a time that works for you and match with developers based on your target role and company.</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
