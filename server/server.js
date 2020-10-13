import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/database.js'
import productRoutes from './routes/productRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

const app = express()
dotenv.config()
connectDB()

app.get('/', (req, res) => {
  res.send('API server is running...')
})
app.use('/api/products', productRoutes)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));