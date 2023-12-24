// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/profilesDb', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a simple Mongoose model for 'Profile'
const ProfileSchema = new mongoose.Schema({
  name: String,
  role: String,
  profilePicture: String,
  YOE: Number,
  currentCompany: String
});

const Profile = mongoose.model('Profile', ProfileSchema);

// Middleware to handle JSON requests
app.use(express.json());

// Allow cross-origin requests
app.use(cors());

// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.path}`);
//     next();
// });


// Endpoint to get profiles
app.get('/api/profiles', async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch profiles' });
  }
});

app.post('/api/profiles', async (req, res) => {
    try {
        const profile = new Profile(req.body);
        await profile.save();
        res.status(201).json(profile);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to add profile' });
    }
});


app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
