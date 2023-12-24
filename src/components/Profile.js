import React, { Component } from 'react';
import '../Profile.css';

class Profile extends Component {
  render() {
    const { profile, onClick } = this.props;
    return (
      <div className="intq-profile-card" onClick={() => onClick(profile)}>
        <img src={profile.profilePicture} alt={profile.name} className="intq-profile-pic" />
        <h3 className="intq-profile-name">{profile.name}</h3>
        <p className="intq-profile-role">{profile.role}</p>
        <p className="intq-profile-yoe">{profile.yearsOfExperience} Years of Experience</p>
        <p className="intq-profile-company">Current: {profile.currentCompany}</p>
      </div>
    );
  }
}

export default Profile;
