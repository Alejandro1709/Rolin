const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const { connectDB } = require('./config/db');
const app = express();

dotenv.config();

connectDB();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use('/api/v1/auth', require('./routes/auth.route'));
app.use('/api/v1/users', require('./routes/users.route'));

app.get('/*', (req, res) => {
  res.status(404).json({ message: 'This page does not exists...' });
});

const port = process.env.PORT || 3050;

app.listen(port, () =>
  console.log(`Server is up and running on port: ${port}`)
);
