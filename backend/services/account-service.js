import { fetchData } from "./api-service.js"
import Account from "../models/account.js"

async function syncData() {
	try {
		const data = await fetchData()

		for(const item of data) {
			for (const key in item) {
				if (item[key] === "") {
					item[key] = 0
				}
			}
			const [account, created] = await Account.findOrCreate({
				where: {
					hesap_kodu: item.hesap_kodu
				},
				defaults: item,
			})

			if(!created) {
				await account.update(item)
			}
		}
		// Istanbul timezone
		const d = new Date()
		const dateTurkiye = d.toLocaleString(
			"tr-TR", {
				timeZone: "Europe/Istanbul"
			}
		)
		console.log('Data synchronized at', dateTurkiye)
	} catch (error) {
		console.error('Error synchronizing data:', error.message)
	}
}

export { syncData }