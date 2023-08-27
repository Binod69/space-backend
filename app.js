const express = require('express');
const app = express();

const PORT = 3001;
app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error connecting to the server: ${err}`);
  } else {
    console.log(`Server connected successfully on PORT: ${PORT}`);
  }
});
