import mongoose from 'mongoose'
import { baseError } from '../errors/baseError.js'
import { badRequest } from '../errors/badRequest.js'
import { validationError } from '../errors/validationError.js'

// eslint-disable-next-line no-unused-vars
function manipulationErrors(error,req,res,next){
  //Utilizando os tipos de erros internos do mongoose, caso algum dado tenha sido apssado de forma incorreta.
  if(error instanceof mongoose.Error.CastError) {
    new badRequest().sendResponse(res)
  } 
  else if (error instanceof mongoose.Error.ValidationError) {
    new validationError(error).sendResponse(res)
  } 
  else {
    new baseError().sendResponse(res)
  }
}

export default manipulationErrors