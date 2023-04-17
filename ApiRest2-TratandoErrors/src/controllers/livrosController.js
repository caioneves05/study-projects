import { livros } from '../models/index.js'

class LivroController {

  static listarLivros = async (req, res, next) => {
    try {
      const result = await livros.find().populate('autor').exec()
      res.status(200).json(result)
    }
    catch(err) {
      next(err)
    }   
  }

  static listarLivroPorId = async (req, res, next) => {
    const id = req.params.id

    try{
      const result = await livros.findById(id).populate('autor', 'nome').exec()

      res.status(200).send(result)      
    }
    catch(err) {
      next(err)
    }
  }

  static cadastrarLivro = async (req, res, next) => {
    let livro = new livros(req.body)

    try {
      const result = await livro.save()

      res.status(201).send(result.toJSON())
    }
    catch(err) {
      next(err)
    }
  }

  static atualizarLivro = async (req, res, next) => {
    const id = req.params.id
    
    try{
      await livros.findByIdAndUpdate(id, {$set: req.body})
      res.status(200).send({message: 'Livro atualizado com sucesso'})
    }
    catch(err) {
      next(err)
    }
  }

  static excluirLivro = async (req, res,next) => {
    const id = req.params.id

    try{
      await livros.findByIdAndDelete(id)
      res.status(200).send({message: 'Livro removido com sucesso'})
    }
    catch(err) {
      next(err)
    }
  }

  static listarLivroPorEditora = async (req, res, next) => {
    const editora = req.query.editora
    try{
      const result  = await livros.find({'editora': editora})
      res.status(200).send(result)
    }
    catch(err){
      next(Error)
    }
  }
  
}

export default LivroController