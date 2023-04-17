import { baseError } from './baseError.js'

export class badRequest extends baseError {
  constructor(message = 'Um ou mais dados fornecidos estão incorretos.') {
    super(message, 400)
  }
}