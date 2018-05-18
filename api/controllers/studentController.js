const { Students } = require('../models')

module.exports = {
   index: async (req, res) => {
      try {
         const students = await Students.findAll({})
         res.send(students)
      } catch (error) {
         console.log(error)
      }
   },
   newStudent: async (req, res) => {
      try {
         const newStudent = await Students.create(req.body)    
         res.send(newStudent.toJSON())
      } catch (error) {
         res.status(400).send({
            error:'Error occured in studen info saving process! ' + error.message
         })
      }
     
   }
}