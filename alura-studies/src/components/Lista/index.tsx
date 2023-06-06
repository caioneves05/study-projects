import { useState } from 'react'
import Item from './Item'
import style from './Lista.module.scss'

const Lista = () => {

    const [tarefa, setTarefa] = useState([
            {
                tarefa: 'React',
                tempo: "02:00:00"
            },
            {
                tarefa: "JavaScript",
                tempo: "01:00:00"
            }
    ])

    return(
        <aside className={style.listaTarefas}>
            <ul>
                <h2/>
                <h2> Estudos dos dia </h2>
                {tarefa.map((item, index) => (
                <Item
                key={index}
                {...item}
                />
                ))}
            </ul>
        </aside>
    )
}

export default Lista