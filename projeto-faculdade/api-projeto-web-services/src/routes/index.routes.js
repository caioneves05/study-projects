import express from 'express'
import router from './routes.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
      res.status(200).send({titulo: 'Welcome to api!'})
    })
  
    app.use(
      express.json(),
      router
    )
  }

export default routes