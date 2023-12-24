import React, { Component } from 'react';

class ScheduleForm extends Component {
  state = {
    date: '',
    time: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSchedule(this.state);

    // Clear the inputs
    this.setState({
      date: '',
      time: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Date:</label>
          <input 
            type="date" 
            value={this.state.date} 
            onChange={(e) => this.setState({ date: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input 
            type="time" 
            value={this.state.time} 
            onChange={(e) => this.setState({ time: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Schedule</button>
        </div>
      </form>
    );
  }
}

export default ScheduleForm;
