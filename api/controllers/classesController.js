const { Classes }  = require('../models')

module.exports = {
   index: async (req, res) =>{
      try {
         const list = await Classes.findAll({ order:[['Class_Group','ASC']]})
         res.send(list)
      } catch (error) {
         console.log(error)
      }
   }
}