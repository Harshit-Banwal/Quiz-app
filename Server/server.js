// server/server.js
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const quizRoutes = require('./routes/quizRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Use cors middleware
app.use(cors());
// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.get('/', (req, res) => res.send('Hello'));
app.use('/api/users', userRoutes);
app.use('/api/quizzes', quizRoutes);

// Start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
