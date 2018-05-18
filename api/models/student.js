module.exports = (sequelize, DataTypes) =>
   sequelize.define('Students', {
      StudentID: {
         type: DataTypes.STRING,
         primaryKey: true,
         unique:true
      },
      AdmnNo: {
         type: DataTypes.STRING(20)
      },
      AdmnDate: {
         type: DataTypes.DATE
      },
      RollNo: {
         type: DataTypes.STRING(2)
      },
      StuName: {
         type: DataTypes.STRING(50)
      },
      FName: {
         type: DataTypes.STRING(50)
      },
      MName: {
         type: DataTypes.STRING(50)
      },
      DOB: {
         type: DataTypes.DATE
      },
      Gender: {
         type: DataTypes.STRING(2)
      },
      Category: {
         type: DataTypes.STRING(10)
      },
      DNO: {
         type: DataTypes.STRING(50)
      }, 
      Street: {
         type: DataTypes.STRING(50)
      },
      City: {
         type: DataTypes.STRING(50)
      },
      District: {
         type: DataTypes.STRING(50)
      },
      Pincode: {
         type: DataTypes.STRING(6)
      },
      PriMobileNo: {
         type: DataTypes.STRING(10)
      },
      SecMobileNo: {
         type: DataTypes.STRING(50)
      },
      LandLine: {
         type: DataTypes.STRING(50)
      },
      StuType: {
         type: DataTypes.STRING(15)
      },
      IsActive: DataTypes.INTEGER,
      BusRouteID: {
         type: DataTypes.STRING(10)
      },
      Remarks: {
         type: DataTypes.STRING(250)
      },
      Reference_StaffID: {
         type: DataTypes.STRING(100)
      }        
   }, {
         tableName: 'tbl_student_master',
         freezeTableName: true,
         timestamps: false
      }
   )
