import { getTopAccounts, getSubAccounts} from '../controllers/account.js'
import express from 'express'
const router = express.Router()

router.get('/top', getTopAccounts)
router.get('/sub/:ustHesapId', getSubAccounts)

export default router