import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profiles from './components/Profiles';
import ContactUs from './components/ContactUs';
import './App.css';
import Admin from './components/Admin';
import ResumeReview from './components/ResumeReview';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/resumeReview" element={<ResumeReview />} />
          <Route path="/admin" element={<Admin />} />
          {/* <Route path="/contact-us" element={<ContactUs />} /> */}
        </Routes>
      </Router>
    );
  }
}

export default App;
