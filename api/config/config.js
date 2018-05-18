module.exports = {
   port: process.env.PORT ||3000,
   db: {
      database: process.env.DB_NAME || 'ghsdb',
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || '',
      options: {
         host: '127.0.0.1',
         dialect: 'mysql'

         // pool: {
         //    max: 5,
         //    min: 0,
         //    acquire: 30000,
         //    idle: 10000
         // },
         // dialectOptions: {
         //    // localAddress: 'localhost',
         //    instanceName: 'SQLEXPRESS'
         // },
         // quoteIdentifiers: false,
         // // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
         // operatorsAliases: false
         // //timezone:false
      }
   }
}