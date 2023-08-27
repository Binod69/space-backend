require('dotenv').config();
const express = require('express');
const cors = require('cors');
const errorMiddleware = require('./src/middleware/error.middleware');
const CustomError = require('./custom.error');

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

//ROUTES IMPORT START
const routes = require('./routes/index');
app.use('/api/v1', routes);
//error handle
app.all('*', (req, res, next) => {
  const err = new CustomError(
    `Can't find ${req.originalUrl} on the server!`,
    404
  );
  next(err);
});
//ROUTES IMPORT ENDS

//error middleware
app.use(errorMiddleware);

const PORT = process.env.PORT ?? 3001;
app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error connecting to the server: ${err}`);
  } else {
    console.log(`Server connected successfully on PORT: ${PORT}`);
  }
});
