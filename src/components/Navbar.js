import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/profiles">Profiles</Link>
        <Link to="/resumeReview">Resume Review</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/Admin">Admin</Link>
      </nav>
    );
  }
}

export default Navbar;
