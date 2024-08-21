import axios from 'axios'

const API_URL = 'http://localhost:3000'

async function getTopAccounts() {
	try {
		return await axios.get(API_URL + '/api/account/top')
	}
	catch(error) { 
		console.error(error)
	}
}

async function getSubAccounts(ustHesapId) {
		return await axios.get(`${API_URL}/api/account/sub/${ustHesapId}`)
}

export { getTopAccounts, getSubAccounts }