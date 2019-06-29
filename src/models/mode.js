const mode = (sequelize, DataTypes) => {
  const Mode = sequelize.define('mode', {
    value: DataTypes.STRING,
  });

  // Mode.associate = models => {
  //   Mode.belongsTo(models.User);
  // };

  return Mode;
};

export default mode;
