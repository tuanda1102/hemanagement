import { Sequelize } from 'sequelize';
import { initModels } from './models/init-models';

export const sequelize = new Sequelize({
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'admin',
  database: 'payroll',
  dialect: 'mysql',
  logging: false,
  sync:{
    
  },
  define: {
    timestamps: false,
  },
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log(
      'Connection has been established successfully. -- payroll success'
    );
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

const payrollModel = initModels(sequelize);
export { payrollModel };
