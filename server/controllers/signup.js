const User = require('../model/User')
const request = require('request');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


exports.signup = (req, res, next) => {
  // Call bcrypt's hash function on your password and ask it to salt the password 10 times
  bcrypt.hash(req.body.password, 10).then(
    (hash) => {
      const user = new User({
        gender: req?.body?.gender,
        name: req?.body?.name,
        surname: req?.body?.surname,
        email: req.body.email,
        password: hash
      });
      user.save().then(
        () => {
          res.status(201).json({
            message: 'User added successfully!'
          });
        }
      ).catch(
        (error) => {
          res.status(500).json({
            error: error
          });
        }
      );
    }
  );
}