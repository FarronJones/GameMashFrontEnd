
require('dotenv').config();

// necessary modules
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

// initialize Express app
const app = express();

// seet up middlewares
app.use(cors());
app.use(bodyParser.json()); // For parsing application/json

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});


db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

// Basic route to check server status
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// fetch all avatars
app.get('/avatars', (req, res) => {
  db.query('SELECT * FROM avatars', (err, results) => {
    if (err) {
      console.error('Error fetching avatars: ', err);
      return res.status(500).json({ message: 'Database error' });
    }
    res.json(results);
  });
});

// fech all games
app.get('/games', (req, res) => {
  db.query('SELECT * FROM game', (err, results) => {
    if (err) {
      console.error('Error fetching games: ', err);
      return res.status(500).json({ message: 'Database error' });
    }
    res.json(results);
  });
});

// fetch all comments for a game
app.get('/comments/:game_id', (req, res) => {
  const { game_id } = req.params;
  db.query('SELECT * FROM comments WHERE game_id = ?', [game_id], (err, results) => {
    if (err) {
      console.error('Error fetching comments: ', err);
      return res.status(500).json({ message: 'Database error' });
    }
    res.json(results);
  });
});

// fetch player details
app.get('/player/:user_id', (req, res) => {
  const { user_id } = req.params;
  db.query('SELECT * FROM player WHERE UserID = ?', [user_id], (err, results) => {
    if (err) {
      console.error('Error fetching player: ', err);
      return res.status(500).json({ message: 'Database error' });
    }
    res.json(results);
  });
});

// staart the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
