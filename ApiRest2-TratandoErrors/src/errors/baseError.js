export class baseError extends Error{
  constructor(message = 'Intern Error.', status = 500) {
    super()
    this.message = message
    this.status = status
  }

  sendResponse(res) {
    res.status(this.status).send({message: this.message, status: this.status})
  }
}