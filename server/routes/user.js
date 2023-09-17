const express = require('express');
const router = express.Router();
const signCtrl = require('../controllers/signup');
const loginCtrl = require('../controllers/login');
const auth = require('./../middleware/auth');
const multer = require('../middleware/multer.config');




// example for inner routing if user is authenticated
// router.post('', auth, multer, loginCtrl.login);

router.post('', loginCtrl.login);
router.post('', signCtrl.signup);








// **** WITH MULTER
// exports.createPost = (req, res, next) => {
//     req.body.thing = JSON.parse(req.body.thing);
//     const url = req.protocol + '://' + req.get('host');
//     const thing = new Thing({
//       title: req.body.thing.title,
//       description: req.body.thing.description,
//       imageUrl: url + '/images/' + req.file.filename,
//       price: req.body.thing.price,
//       userId: req.body.thing.userId
//     });
//     thing.save().then(
//       () => {
//         res.status(201).json({
//           message: 'Post saved successfully!'
//         });
//       }
//     ).catch(
//       (error) => {
//         res.status(400).json({
//           error: error
//         });
//       }
//     );
//   };



// DELETE 
// exports.deleteThing = (req, res, next) => {
//     Thing.findOne({ _id: req.params.id }).then(
//       (thing) => {
//         if (!thing) {
//           return res.status(404).json({
//             error: new Error('Objet non trouvé !')
//           });
//         }
//         if (thing.userId !== req.auth.userId) {
//           return res.status(401).json({
//             error: new Error('Requête non autorisée !')
//           });
//         }
//         Thing.deleteOne({_id: req.params.id}).then(
//           () => {
//             res.status(200).json({
//               message: 'Deleted!'
//             });
//           }
//         ).catch(
//           (error) => {
//             res.status(400).json({
//               error: error
//             });
//           }
//         );
//       }
//     );
//   };


//  TO get somethign by id
// app.get('/api/stuff/:id', (req, res, next) => {
//   Thing.findOne({
//     _id: req.params.id
//   }).then(
//     (thing) => {
//       res.status(200).json(thing);
//     }
//   ).catch(
//     (error) => {
//       res.status(404).json({
//         error: error
//       });
//     }
//   );
// });


module.exports = router;