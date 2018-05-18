module.exports = (sequelize, DataTypes) =>
   sequelize.define('Classes', {
      ClassID: {
         type: DataTypes.STRING,
         primaryKey: true
      },
      ClassShortName: {
         type: DataTypes.STRING(20),
         allowNull: false
      },
      ClassFullName: {
         type: DataTypes.STRING(30),
         allowNull: false
      },
      Medium: {
         type: DataTypes.STRING(2),
         allowNull: false
      },
      Class_Group: {
         type: DataTypes.INTEGER
      },
      IsActive: DataTypes.INTEGER,
      PromotedClassID: {
         type: DataTypes.STRING(10)
      }        
   }, {
         tableName: 'tbl_classes',
         freezeTableName: true,
         timestamps: false
      }
   )
