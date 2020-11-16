import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/database.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

const app = express()
dotenv.config()
connectDB()

app.get('/', (req, res) => {
  res.send('API server is running...')
})

app.use(express.json())
app.use('/api/orders', orderRoutes)
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));