const temperature = (sequelize, DataTypes) => {
  const Temperature = sequelize.define('temperature', {
    value: DataTypes.INTEGER,
  });

  return Temperature;
};

export default temperature;
