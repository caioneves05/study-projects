import express from 'express'
import CompanyController from '../controllers/company.controller.js'

const router = express.Router()

router
    .get('/register', CompanyController.getRegister)
    .post('/create', CompanyController.createRegister)
    .put('/update/:mes', CompanyController.updateRegister)
    .delete('/register', CompanyController.deleteRegister)
export default router