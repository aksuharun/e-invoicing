import { Sequelize } from 'sequelize'
import { development as config } from './config/config.js'

const sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	{
		host: config.host,
		dialect: 'postgres',
	}
)

export default sequelize