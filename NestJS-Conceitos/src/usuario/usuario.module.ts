import { Module } from "@nestjs/common"
import { UsuarioController } from "./usuario.controller"
import { UsuarioRepository } from "./usuario.repository"
import { emailValidator } from "./validacao/email-unico"

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository, emailValidator],
})
export class UsuarioModule {}