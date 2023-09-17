const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
// const loginRoutes = require('./routes/');


const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// handling CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});



app.use('/registration', userRoutes);
app.use('/login', userRoutes);






// MONGODB CONNECT
const username = encodeURIComponent('mrpapper');
const password = encodeURIComponent('admin12312312333');
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
mongoose.connect(`mongodb+srv://${username}:${password}@cluster-users.wslh6ez.mongodb.net/?retryWrites=true&w=majority`, config)
.then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
});






module.exports = app;
