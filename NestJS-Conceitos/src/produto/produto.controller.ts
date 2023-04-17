import { Controller, Get, Post, Body } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";
import { CriarProdutoDTO } from "src/dto/CriarProdutos.dto";

@Controller('/produto')
export class ProdutoController {

    constructor(private produtosRepository: ProdutoRepository){}

    @Get()
    async listaProdutos() {
        return this.produtosRepository.listar()
    }

    @Post()
    async criarProdutos(@Body() produto: CriarProdutoDTO) {
        this.produtosRepository.salvar(produto)
        return produto
    }
}
