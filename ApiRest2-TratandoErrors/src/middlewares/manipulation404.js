import pageNotFound from '../errors/pageNotFound.js'

export default function manipulation404(req,res,next) {
  const error = new pageNotFound().sendResponse(res)
  next(error)
}