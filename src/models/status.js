const status = (sequelize, DataTypes) => {
  const Status = sequelize.define('status', {
    value: DataTypes.BOOLEAN,
  });

  return Status;
};

export default status;
