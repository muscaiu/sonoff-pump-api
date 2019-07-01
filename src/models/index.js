import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
    logging: false,
  },
);

const models = {
  Mode: sequelize.import('./mode'),
  Status: sequelize.import('./status'),
  Temperature: sequelize.import('./temperature'),
  User: sequelize.import('./user'),
};

// Object.keys(models).forEach(key => {
//   if ('associate' in models[key]) {
//     models[key].associate(models);
//   }
// });

export { sequelize };

export default models;
