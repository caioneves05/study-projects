import express from 'express'
import user from './company.routes.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
      res.status(200).send({titulo: 'Welcome to api!'})
    })
  
    app.use(
      express.json(),
      user
    )
  }

export default routes