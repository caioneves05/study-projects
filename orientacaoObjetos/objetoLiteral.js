const user  = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "10/02/21002",
    role: "estudante",
    ativo: true,
    exibirInfo: function(){
        console.log(user.email)
    } 
}

const admin  = {
    nome: "Mariana",
    email: "m@m.com",
    nascimento: "11/01/21002",
    role: "admin",
    ativo: true,
    criarcURSO: function(){
        console.log('Curso criado.')
    } 
}
//Definindo um protótipo/  Objeto que vai erdar propriedades, objeto que cede essas propriedades.
Object.setPrototypeOf(admin, user)

admin.criarcURSO();
admin.exibirInfo();


//O bind serve para ligar algo a outra outra coisa, ou seja ele dá constesto (propriedades) ao exibir()
//const exibirNome = exibir.bind(user)
