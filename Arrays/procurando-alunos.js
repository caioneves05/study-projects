// Arquivo procurando-aluno.js

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
  //const alunos = listaDeAlunosEMedias[0];
  //const media = listaDeAlunosEMedias[1];

  const [alunos, media] = listaDeAlunosEMedias;
  
  const indice = alunos.indexOf(aluno)
  const mediaAluno = media[indice]

  if(alunos.includes(aluno)){
    console.log(`${aluno} tem média ${mediaAluno}`)
  }else{
    console.log(`Aluno não encontrado!`)
  }
}


exibeNomeENota('Caio')


//O método includes() verifica se o parâmetro passado para ele está incluso na lista.