const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const { connectDB } = require('./config/db');
const app = express();

dotenv.config();

connectDB();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/*', (req, res) => {
  res.status(404).json({ message: 'This page does not exists' });
});

const port = process.env.PORT || 3050;

app.listen(port, () => console.log(`Serveris up and running on port: ${port}`));
