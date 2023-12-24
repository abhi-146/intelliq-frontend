import React, { Component } from 'react';
import Profile from './Profile';
import Popup from './Popup';
import axios from 'axios';

class Profiles extends Component {
  state = {
    showPopup: false,
    selectedProfile: null,
    profiles: [],
  };

  componentDidMount() {
    axios.get('http://localhost:8080/mentor/getAll')
      .then((response) => {
        this.setState({ profiles: response.data });
      })
      .catch((error) => {
        console.error("Error fetching profiles:", error);
      });
  }

  handleProfileClick = (profile) => {
    this.setState({
      selectedProfile: profile,
      showPopup: true,
    });
  };

  render() {
    return (
      <div className="profiles">
        {this.state.profiles.map(profile => (
          <Profile key={profile.id} profile={profile} onClick={this.handleProfileClick} />
        ))}

        {this.state.showPopup && <Popup profile={this.state.selectedProfile} onClose={() => this.setState({ showPopup: false })} />}
      </div>
    );
  }
}

export default Profiles;
