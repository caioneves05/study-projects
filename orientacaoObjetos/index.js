import User from './user.js';
import Admin from './admin.js';
import Docente from './docente.js';

const novoUser = new User('Caio', '05/04/2003', 'g@g.br');

const novoAdmin = new Admin('Fabio', '23/04/2003', 'gfnfib@g.br');

const novoDocent = new Docente('Ruam', '11/04/2006', 'ruam@gmail.com')

console.log(novoDocent.exibirInfos());