if (process.env.USER) require('dotenv').config();
const express = require('express');
const cors = require('cors');
//need to double check if I need to install anything to use cors, I don't think so?

const moviesRouter = require('./movies/movies.router');
const reviewsRouter = require('./reviews/reviews.router');
const theatersRouter = require('./theaters/theaters.router');

const errorHandler = require('./errors/errorHandler');
const notFound = require('./errors/notFound');
const onServer = process.env.NODE_ENV === 'production';

const app = express();
app.use(
  cors({
    origin: onServer
      ? 'https://wlm-front-end-9lio.onrender.com/'
      : 'http://localhost:3000/'
  })
);
app.use(express.json());

app.use('/movies', moviesRouter);
app.use('/reviews', reviewsRouter);
app.use('/theaters', theatersRouter);

app.use(notFound);
app.use(errorHandler);
//this just determines the order that an error would pass through?
// or does it just put these both into play?

module.exports = app;
