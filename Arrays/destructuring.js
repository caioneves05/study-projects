const numPares = [2,4,6,8];
const numImpares = [1,3,5,7,9];

const todosNumeros = [...numPares,...numImpares];

console.log(todosNumeros)

//jogando os resto dos elementos dentro do array com o spread operatorl.
const [num1, num2, ...outrosnumeros] = [1,2,4,5,6,7,8];

console.log(num2, outrosnumeros)


const [nome1 = 'Caio'] = []
//Adicionando um valor "padrão" a um Array.
console.log(nome1)

const pessoa = {
  nome: 'Caio',
  idade: 25
};
// "Copiando" os dados de um objeto para um novo objeto.
const pessoaComTelefone = {
  ...pessoa,
  telefone: 1119998793
};

console.log(pessoaComTelefone);

const { idade } = pessoa;

console.log(idade)