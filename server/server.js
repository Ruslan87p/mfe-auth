// const express = require("express");
// const cors = require("cors");
// const mongoose = require('mongoose');
// const app = express();

// var corsOptions = {
//   origin: "http://localhost:4200"
// };

// app.use(cors(corsOptions));

// // parse requests of content-type - application/json
// app.use(express.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));


// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });

// mongoose
//   .connect('mongodb://localhost:27017/', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then((item) => {
//     console.log( "Connected to the database!");
//     // set port, listen for requests
//     const PORT = 8080;
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}.`);
//     });
//   })
//   .catch(err => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });


