function User(nome, email) {
    this.nome = nome
    this.email = email

    this.exibirInfos = function(){
        return `${this.nome}, ${this.email}`;
    }
};

//const novoUser = new User('Caio', 'c@c.com');
//console.log(novoUser.exibirInfos()) 

function Admin(role) {
            // This é o centesto de user.
    User.call(this, 'Ju', 'j@j.com')
    this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype);
const novoUser = new Admin('admin');

console.log(novoUser.exibirInfos())
console.log(novoUser.role);