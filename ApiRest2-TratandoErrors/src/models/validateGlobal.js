import mongoose from 'mongoose'

//Definindo uma propriedade para todos os campós do tipo string dos models
mongoose.Schema.Types.String.set('validate', {
  validator: (valor) => valor !== '',
  message: ({ path }) => `${path} foi fornecido em branco.`
})