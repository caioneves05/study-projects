import { Type } from "class-transformer";
import { IsString,
     IsNotEmpty, 
     IsPositive, 
     IsNumber, 
     Min, 
     MinLength, 
     MaxLength, 
     ValidateNested,
     IsArray,
     ArrayMinSize} from 'class-validator'

export class CaracteristicaProdutoDTO {
    
    @IsNotEmpty({
        message: 'O campo nome não pode estar vazio.'
    })
    @IsString()
    nome: string

    @IsNotEmpty({
         message: 'Nome da cadasterística não pode ser vazio' 
    })
    descricao: string;

}

export class ImagemProdutoDTO {

    @IsNotEmpty({
        message: 'O campo URL não pode ficar vazio'
    })
    @IsString()
    url: string

    @IsNotEmpty({
        message: 'Descrição do produto não pode estar vazia.'
    })
    @IsString()
    descricao: string
}

export class CriarProdutoDTO {

    @IsString()
    @IsNotEmpty({
        message: 'Nome do produto não pode ser vazio'
    })
    nome: string

    @IsNumber({ 
        maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false 
    })
    @Min(1, { 
        message: 'O valor precisa ser maior que zero' 
    })
    valor: number

    @Min(0, {
        message: 'Esse campo precisa ter um número positivo.'
    })
    @IsNumber()
    quantidade: number

    @MinLength(1, {
        message: 'A descrição não pode estar vazia.'
    })
    @MaxLength(1000, {
        message: 'O campo descrição não pode ter mais de 1000 caracteres.'
    })
    descricao: string


    @ValidateNested()
    @IsArray()
    @ArrayMinSize(3, {
        message: 'A lista de características do produto precisa ter pelo menos 3 itens'
    })
    @Type(() => CaracteristicaProdutoDTO)
    caracteristicas: CaracteristicaProdutoDTO[]

    @ArrayMinSize(1, {
        message: 'A lista de imagens do produto precisa ter pelo menos 1 item'
    })
    imagens: ImagemProdutoDTO[]

    @IsString()
    @IsNotEmpty({
        message: 'A categoria do produto não pode ser vazia'
    })
    categoria: string
}
