module.exports = (app) => {
   //Routes
   app.use('/classes', require('./routes/settings'));
   app.use('/students', require('./routes/students'));
   app.use('/users', require('./routes/users'));
   //app.use('/staff', require('./routes/staff'));

}