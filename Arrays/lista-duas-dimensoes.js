const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaAlunosEMedias = [alunos, medias];

console.log(`A aluna na posição 1 da lista é ${listaAlunosEMedias[0][1]}, e sua nota é ${listaAlunosEMedias[1][1]}`)

//Arrays têm seu principal uso quando temos uma grande quantidade de informações com propósitos similares, como as notas de um aluno. Matrizes, por sua vez, são utilizadas quando precisamos de vários arrays similares ou com informações ligadas às outras, como as notas de uma classe com vários alunos.

//quando o concat() recebe um array como parâmetro, são apenas os elementos dentro dele que são concatenados, e não o array em si.