import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import accountRouter from './routers/account.js'

import sequelize from './database.js'
import { syncData } from './services/account-service.js'
import cron from 'node-cron'


// Express server

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/api/account', accountRouter)


// Sync data every hour  
cron.schedule('0 * * * *', async () => {
	console.log('Running data synchronization task')
	await syncData()
})

sequelize.sync({ force: true })
	.then(async () => {
		await syncData()
		const port = process.env.SERVER_PORT || 3000
		const domain = process.env.SERVER_DOMAIN || 'localhost'
		
		app.listen(port, () => {
			console.log(`Server running on http://${domain}:${port}/`)
		})
})