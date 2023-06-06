import Botao from "../Button"
import Relogio from "./Relogio"
import style from './cronometro.module.scss'

const Cronometro = () => {
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um Card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao texto="Começar"/>
        </div>
    )
}

export default Cronometro