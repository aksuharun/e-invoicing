import axios from 'axios'
import https from 'https'

// SSL certificate has expired, so we need to ignore the error.
const httpsAgent = new https.Agent({
	rejectUnauthorized: false
})

// Don't export this function, because it's only used internally.
async function getToken() {
	try {
		const authString = process.env.API_USERNAME + ':' + process.env.API_PASSWORD
		const res = await axios.post(
			process.env.API_URL_TOKEN,
			{},
			{
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Basic ' + Buffer.from(authString).toString('base64'),
				},
				httpsAgent: httpsAgent
			}
		)
		return res.data.response.token
	} catch (error) {
		console.error('Error getting token:', error.message)
		throw error
	}
}

async function fetchData(token) {
	token = token || await getToken()
	try {
		const res = await axios.patch(
			process.env.API_URL_DATA,
			{
				fieldData: {},
				script: 'getData',
			},
			{
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + token,
				},
				httpsAgent: httpsAgent
			}
		)
		const formatedResult = JSON.parse(res.data.response.scriptResult)
		console.log(formatedResult)
		return formatedResult
	} catch (error) {
		console.error('Error fetching data:', error.message)
		throw error
	}
}

export { fetchData }