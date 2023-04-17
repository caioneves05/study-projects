const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice)=>{
  return medias[indice] < 7 
});

//Quando a função callback retorna verdadeiro, ou true, o elemento é adicionado no array de retorno, e quando ela retorna falso, ou false, o elemento é descartado.

//O MÉTODO FILTER RETORNA TRUE SE O ELEMENTO PASSAR PELA CONDIÇÃO, CASO CONTRÁRIO ELE NÃO SERÁ ADICIONADO AO ARRAY.

//Quando não utilizamos o primeiro parâmetro, uma convenção que você pode encontrar é o uso do underline (_) em vez de nomear o parâmetro


console.log(reprovados)