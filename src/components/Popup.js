import React, { Component } from 'react';
import ScheduleForm from './ScheduleForm';

class Popup extends Component {
  handleSchedule = (data) => {
    console.log('Scheduled mock interview:', data);

    // Close the popup after scheduling
    this.props.onClose();
  };

  render() {
    const { profile, onClose } = this.props;
    return (
      <div className="popup">
        <div className="popup-content">
          <h3>Mock Interview with {profile.name}</h3>

          <ScheduleForm onSchedule={this.handleSchedule} />

          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }
}

export default Popup;
