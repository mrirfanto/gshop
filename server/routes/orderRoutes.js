import express from 'express'
const router = express.Router()

import { protect } from '../middleware/authMiddleware.js'
import {
  addOrder
} from '../controllers/orderController.js'

router.route('/').post(protect, addOrder)

export default router