import express from 'express'
import routes from './routes/index.routes.js'
import db from './config/connectDB.js'
import cors from 'cors';

db.on('error', console.log.bind(console, 'Erro in connection database'))
db.once('open', () => {
  console.log('Database connection successful')
})

const app = express()

app.use(express.json())

app.use(cors())

routes(app)

export default app