import style from './Botao.module.scss'

interface PropsBotao {
    texto: string
}

const Botao = ({ texto }: PropsBotao) => {
    return(
        <button className={style.botao}>{texto}</button>
    )
}

export default Botao