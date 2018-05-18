const express = require('express');
const router = express.Router();

const classesController = require('../controllers/classesController');
// const StaffTypesController = require('../controllers/staffTypes')
// const ClassesController = require('../controllers/classes')

router.route('/').get(classesController.index);
// router.route('/stafftypes').get(StaffTypesController.index);
// router.route('/classes').get(ClassesController.index);
   
module.exports = router;
