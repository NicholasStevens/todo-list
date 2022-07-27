"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tag.belongsToMany(models.todoItem, {
        through: "itemTags",
        foreignKey: "tagId",
      });
      // define association here
    }
  }
  tag.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tag",
    }
  );
  return tag;
};
