import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Tweet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "id" });
    }
  }
  Tweet.init(
    {
      userId: DataTypes.INTEGER,
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tweet",
    }
  );
  return Tweet;
};
