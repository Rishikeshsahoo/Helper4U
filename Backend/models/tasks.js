"use strict";
const { Model, UUIDV4 } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    toJSON()
    {
      return {...this.get(), id:undefined}
    }
   
  }
  Tasks.init(
    {
      uuid:{
        type:DataTypes.UUID,
        defaultValue:UUIDV4
      },
      division: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      priority: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Tasks",
      tableName:"tasks"
    }
  );
  return Tasks;
};
