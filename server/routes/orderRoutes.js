import express from 'express'
const router = express.Router()

import { protect } from '../middleware/authMiddleware.js'
import {
  addOrder,
  getOrderById,
  updateOrderToPaid
} from '../controllers/orderController.js'

router.route('/').post(protect, addOrder)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router