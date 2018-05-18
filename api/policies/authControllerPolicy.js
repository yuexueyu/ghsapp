const Joi = require('joi')

module.exports ={
   register (req, res, next){
      const schema ={
         UserID:Joi.string().alphanum().min(3).max(30).required(),
         UserName:Joi.string().required(),
         Password:Joi.string().regex(
            new RegExp('^[a-zA-Z0-9]{6,10}$')
         ),
         Role:Joi.string().required(),
         IsActive:Joi.number()
      }

      const {error, value} = Joi.validate(req.body, schema)

      if(error){
         switch(error.details[0].context.key){
            case 'UserID': 
               res.status(400).send({
                  error: 'You must provide a valid user id'
               })
            break
            case 'UserName': 
               res.status(400).send({
                  error: 'You must provide a valid user name'
               })
            break
            case 'Password': 
               res.status(400).send({
                  error: `The password provided failed to match the following rules
                  <br>
                  1. It must contain only folling characters: lower case, upper case and numeric
                  <br>
                  2. Min length 6, Max 10 chaacters
                  `
               })
               break
            default:
               res.status(400).send({
                  error: 'Invaild User Registration Details'
               })
         }
      } else{
         next()
      }
      
   }
}