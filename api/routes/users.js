const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const authControllerPolicy = require('../policies/authControllerPolicy');


router.route('/').get(authController.index);
router.route('/register').post(
                              authControllerPolicy.register, 
                              authController.Register
                           );

module.exports = router;
