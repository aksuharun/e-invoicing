import { Sequelize, DataTypes } from 'sequelize'
import sequelize from '../database.js'

const Account = sequelize.define('Accounts', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	hesap_kodu: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	hesap_adi: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	tipi: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	ust_hesap_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	borc: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
	alacak: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
	borc_sistem: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
	alacak_sistem: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
	borc_doviz: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
	alacak_doviz: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
	borc_islem_doviz: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
	alacak_islem_doviz: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
	birim_adi: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	bakiye_sekli: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	aktif: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	dovizkod: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
},
	{ timestamps: false }
)


export default Account