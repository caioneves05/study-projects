import { baseError } from './baseError.js'

export default class pageNotFound extends baseError {
  constructor(message = 'Página não encontrada.') {
    super(message, 404)
  }
}