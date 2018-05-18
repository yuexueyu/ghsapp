const { Users } = require('../models')

module.exports = {
   index: async (req, res) => {
      try {
         const users = await Users.findAll({})
         res.send(users)
      } catch (error) {
         console.log(error)
      }
   },
   Register: async (req, res) => {
      try {
         const newUser = await Users.create(req.body)    
         res.send(newUser.toJSON())
      } catch (error) {
         res.status(400).send({
            error:'This user id already in use'
         })
      }
     
   }
}