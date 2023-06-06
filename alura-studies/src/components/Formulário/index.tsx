import { useState } from "react"
import Botao from "../Button"
import style from './Formulario.module.scss'

interface PropsFormulario {
    tarefa: string
    tempo: string
}

const Formulario = ( ) => {

    let [tempo, setTempo] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTempo(event.target.value)
    }

    const adicionarTarefa = (event:React.FormEvent) => {
        event.preventDefault()
    }

    return(
        
        <form onSubmit={adicionarTarefa} className={style.novaTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input
                type="text" 
                name="tarefa" 
                id="tarefa" 
                placeholder="O que você quer estudar?"
                required
            />

            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input 
                type="time" 
                step="1" 
                id="tempo"
                name="tempo" 
                min="00:00:00" 
                max="01:30:00"
                value={tempo}
                onChange={handleChange}
                required
                />
            </div>
            <Botao
            texto='Adicionar'
             />
        </form>
    )
}

export default Formulario