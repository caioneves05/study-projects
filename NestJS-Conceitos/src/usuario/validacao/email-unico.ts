import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UsuarioRepository } from "../usuario.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
//Informando que o provider é assíncrono
@ValidatorConstraint({ async: true })
export class emailValidator implements ValidatorConstraintInterface {
          
    constructor(private usuarioRepository: UsuarioRepository) {}

    async validate(email: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const EmailConfirmado = await this.usuarioRepository.bucarUsuario(email)
        return !EmailConfirmado
    }
    
}

export const emailUnico = (opcoesValidacao: ValidationOptions) => {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return (objeto: Object, propriedade: string) => {
        registerDecorator({ 
            target: objeto.constructor, 
            propertyName: propriedade, 
            options: opcoesValidacao, 
            constraints: [], validator: emailValidator
        })
    }
}