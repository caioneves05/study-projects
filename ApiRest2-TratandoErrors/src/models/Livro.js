import mongoose from 'mongoose'

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {type: String, required: [true, 'Titulo do livro obrigatório.']},
    autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: [true, 'Nome do autor é obrigatório']},
    editora: {type: String, required: [true, 'Editora é obrigatória.'], enum: { values: ['Alura', 'Casa do Código'], message: 'Editora {VALUE} não é permitida'}},
    numeroPaginas: {
      type: Number, 
      validate: {
        validator: (valor) => {
          return valor >= 10 && valor <= 5000
        },
        message: 'O número de páginas deve estar entre 10 e 50000'
      }
    }
  }
)

const livros= mongoose.model('livros', livroSchema)

export default livros