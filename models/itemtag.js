"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class itemTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      itemTag.belongsTo(models.tag, { foreignKey: "tagId" });
      itemTag.belongsTo(models.todoItem, { foreignKey: "todoItemId" });
      // define association here
    }
  }
  itemTag.init(
    {
      todoItemId: DataTypes.INTEGER,
      tagId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "itemTag",
    }
  );
  return itemTag;
};
