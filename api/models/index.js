const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config');
const db = {};

const sequelize = new Sequelize(
   config.db.database,
   config.db.username,
   config.db.password,
   config.db.options
);

fs
   .readdirSync(__dirname)
   .filter((file) =>
      file != "index.js" && file!="Relationships.js"
   )
   .forEach((file) => {
      const model = sequelize.import(path.join(__dirname, file))
      db[model.name] = model
      // console.log(model)
   });

   //Relationships
   //require('./Relationships')(sequelize)
   

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize
   .authenticate()
   .then(() => {
      console.log('Connection has been established successfully.');
   })
   .catch(err => {
      console.error('Unable to connect to the database:', err.message);
   });

   
   // Raw Queries Execution
   // db.sequelize.query('exec getAllStaff')
   // .then(result =>
   // console.log(result))
   
module.exports = db;