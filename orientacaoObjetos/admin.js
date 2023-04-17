import User from './user.js';

//Herança de classes
 export default class Admin extends User {
    constructor(nome, nascimento, email, role = 'admin', ativo = true){
        //Trazendo todas as classes que queremos aproveitar de User.
        super(nome, nascimento, email, role, ativo)

    }

    criarCurso(nomeCurso, qntdVagas) {
        return `Curso ${nomeCurso} criado, ${qntdVagas} vagas disponíveis.`
    }
}
