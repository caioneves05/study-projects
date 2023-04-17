import { IsEmail, MinLength, IsNotEmpty, Min } from "class-validator"
import { emailUnico } from "src/usuario/validacao/email-unico"

export class CriaUsuarioDTO {
    
    @IsNotEmpty({
        message: 'O campo nome não pode estar vazio.'
    })
    nome: string

    @IsEmail(undefined, {
        message: 'O campo email precisa ser do formato de email.'
    })
    @emailUnico({ message: 'Já existe um usuário com esse email.' })
    email: string

    @IsNotEmpty({
        message: 'O campo senha não pode estar vazio'
    })
    @Min(6, {
        message: 'O campo senha precisa ter no mínimo 6 caracteres.'
    })
    senha: string
}