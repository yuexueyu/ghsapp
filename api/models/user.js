module.exports = (sequelize, DataTypes) =>
   sequelize.define('Users', {
      UserID: {
         type: DataTypes.STRING,
         primaryKey: true
      },
      UserName: {
         type: DataTypes.STRING(100),
         allowNull: false
      },
      Password: {
         type: DataTypes.STRING,
         allowNull: false
      },
      Role: {
         type: DataTypes.STRING(15),
         allowNull: false
      },
      IsActive: DataTypes.INTEGER
      
   }, {
         tableName: 'tbl_users',
         freezeTableName: true,
         timestamps: false
      }
   )
