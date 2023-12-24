import React, { Component } from 'react';
import axios from 'axios';

const DEFAULT_PROFILE_PIC = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c754e0f7-221e-4859-9314-9832aaa55c0f/dcxkftg-536c8842-ce5f-41cb-9f7c-9a56f618f234.png/v1/fit/w_640,h_640,q_70,strp/toon_link_profile_pic__commission__by_ayayyuki_dcxkftg-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvYzc1NGUwZjctMjIxZS00ODU5LTkzMTQtOTgzMmFhYTU1YzBmXC9kY3hrZnRnLTUzNmM4ODQyLWNlNWYtNDFjYi05ZjdjLTlhNTZmNjE4ZjIzNC5wbmciLCJ3aWR0aCI6Ijw9NjQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.iWTz_-119T11FXvTu9HgWr9dh48tXTQdXG6HRjn4flY';

class Admin extends Component {
    state = {
        name: '',
        role: '',
        profilePicture: DEFAULT_PROFILE_PIC,
        yearsOfExperience: '',
        currentCompany: '',
        message: ''
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/profiles', this.state)
            .then(response => {
                this.setState({
                    name: '',
                    role: '',
                    profilePicture: DEFAULT_PROFILE_PIC,
                    yearsOfExperience: '',
                    currentCompany: '',
                    message: 'Profile added successfully!'
                });
            })
            .catch(error => {
                console.error('Error adding profile:', error);
                this.setState({ message: 'Error adding profile. Please try again.' });
            });
    };

    render() {
        return (
            <div>
                <h2>Add Profile</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Role:</label>
                        <input type="text" name="role" value={this.state.role} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Profile Picture URL:</label>
                        <input type="text" name="profilePicture" value={this.state.profilePicture} onChange={this.handleChange} />
                        <div>
                            <img src={this.state.profilePicture} alt="Profile Preview" style={{ width: '100px', marginTop: '10px' }} />
                        </div>
                    </div>
                    <div>
                        <label>Years of Experience:</label>
                        <input type="number" name="yearsOfExperience" value={this.state.yearsOfExperience} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Current Company:</label>
                        <input type="text" name="currentCompany" value={this.state.currentCompany} onChange={this.handleChange} />
                    </div>
                    <div>
                        <button type="submit">Add Profile</button>
                    </div>
                </form>
                {this.state.message && <p>{this.state.message}</p>}
            </div>
        );
    }
}

export default Admin;
