import { badRequest } from './badRequest.js'

export class validationError extends badRequest {
  constructor(error) {
    const mensagemErro = Object.values(error.errors).map(erro => erro.message).join(', ')

    super(`Erros encontratados: ${mensagemErro}`)
  }
}