import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">

        <div className="nav-tag"> IntelliQ</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/profiles">Profiles</Link>
          <Link to="/resumeReview">Resume Review</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/Admin">Admin</Link>
        </div>

      </nav>
    );
  }
}

export default Navbar;
