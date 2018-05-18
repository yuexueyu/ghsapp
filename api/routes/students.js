const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController');

router.route('/').get(studentController.index);
router.route('/newstudent').post(studentController.newStudent);

module.exports = router;
