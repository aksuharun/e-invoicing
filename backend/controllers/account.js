import Account from "../models/account.js"
import sequelize from '../database.js'
function getTopAccounts(req, res) {
	Account.findAll({
		attributes: ['ust_hesap_id', [sequelize.fn('sum', sequelize.col('borc')), 'total']],
		group: ['ust_hesap_id'],
		order: [[sequelize.col('ust_hesap_id'), 'ASC']],
		limit: 10,
		where: {
			tipi: 'A'
		}
	})
		.then((accounts) => {
			res.json(accounts)
		})
		.catch(() => {
			res.status(500).json({ message: 'Error fetching top account data' })
		})
}

function getSubAccounts(req, res) {
	const { ustHesapId } = req.params

	Account.findAll({
		where: {
			ust_hesap_id: ustHesapId
		}
	})
		.then((accounts) => {
			res.json(accounts)
		})
		.catch(() => {
			res.status(500).json({ message: 'Error fetching sub-account data' })
		})
}

export { getTopAccounts, getSubAccounts }