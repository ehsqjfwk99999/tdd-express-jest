const express = require('express');
const mongoose = require('mongoose');
const productRouter = require('./routes');

const app = express();
app.use(express.json());

mongoose
  .connect('mongodb://user:example@localhost:27017/', {
    // keepAlive: false,
  })
  .then(() => {
    console.log('MongoDB Connected ...');
  })
  .catch((err) => {
    console.log(err);
  });

app.use('/api/products', productRouter);
app.get('/', (req, res) => {
  res.send('Hello Express');
});

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).json({ message: err.message });
});

// app.listen(3000, () => {
//   console.log(`Server running at 127.0.0.1:3000`);
// });

module.exports = app;
