//Todas a classe sgue as regras de STRICT MODE

import User from './user.js';

export default class Docente extends User {
    constructor(nome, nascimento, email, role = 'docente', ativo = 'true'){
        super(nome, nascimento, email, role, ativo)
    }

    aprovaEstudante(estudante, curso) {
        return `${estudante} foi aprovado no curso ${curso}.`
    }
}
