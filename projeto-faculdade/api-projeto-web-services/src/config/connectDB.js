import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect('mongodb+srv://ncaio037:28481508@cluster-alura.b9u1t6d.mongodb.net/faculdade')

let db = mongoose.connection

export default db