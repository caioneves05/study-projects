import style from '../Lista.module.scss'


interface PropsItem {
    tempo: string
    tarefa: string
}

const Item = ({ tempo, tarefa }: PropsItem) => {
    return(
        <li className={style.item}>
                    <h3>
                        {tarefa}
                    </h3>
                    <span>
                        {tempo}
                    </span>
        </li>
    )
}

export default Item