import { Injectable } from "@nestjs/common";

@Injectable()
export class ProdutoRepository {
    private produtos = []

    async salvar(produto) {
        this.produtos.push(produto)
        console.log(produto)
    }

    async listar() {
        return this.produtos
    }
}