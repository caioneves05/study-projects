 export default class User {
    //privando os atributos da classe com #
    #nome
    #nascimento
    #email
    #role
    #ativo
    
    constructor(nome, nascimento, email, role, ativo = true) {
        this.#nome = nome,
        this.#nascimento = nascimento,
        this.#email = email,
        this.#role = role || 'estudante',
        this.#ativo = ativo
    };

        //Método apenas para leitura.
    //As funções getter nunca recebem argumento
    get nome() {
        return this.#nome;
    };

        //Método apenas para leitura.
    //As funções getter nunca recebem argumento
    get email() {
        return this.#email;
    };

    set nome(novoNome) {
        if(novoNome === ''){
            throw new Error('Formato inválido');
        }
        this.#nome = novoNome;
    };

    exibirInfos() {
        return `${this.#nome}, ${this.#email}, ${this.#nascimento}, ${this.#role}, ${this.#ativo}`;
    };

};

//GET é um método acessor
