import { Injectable } from "@nestjs/common"

@Injectable()
export class UsuarioRepository {
    private usuarios = []

    async salvar(user) {
        this.usuarios.push(user)
        console.log(this.usuarios)
    }

    async listar() {
        return this.usuarios
    }

    async bucarUsuario(email: string) {
        const user = this.usuarios.find(
            usuario => usuario.email === email
        )
        return user !== undefined
    }
}