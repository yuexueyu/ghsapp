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
                  error: `Invalid Password, The password must contain the following rules
                  <br>
                  1. Lower case, upper case and numeric are allowed
                  <br>
                  2. Length must be 6 - 10 characters
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