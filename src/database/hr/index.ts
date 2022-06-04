import { Sequelize } from 'sequelize';
import { initModels } from './models/init-models';

const sequelize = new Sequelize('HR', 'sa', 'admin', {
  host: 'localhost',
  dialect: 'mssql',
  port: 1433,
  logging: false,
});
const hrModel = initModels(sequelize);
(async () => {
  try {
    await sequelize.authenticate();
    console.log(
      'Connection has been established successfully. --- connected to HR'
    );
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

export { hrModel };
