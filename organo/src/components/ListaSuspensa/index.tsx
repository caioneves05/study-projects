import './ListaSuspensa.css'

interface ListaSuspensaProps {
    aoAlterado: (valor: string) => void
    label: string
    required: boolean
    valor: string
    itens: string[]
}

const ListaSuspensa = ({ label, required, aoAlterado, valor, itens }: ListaSuspensaProps) => {
    
    return(
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select 
                required={required} 
                value={valor} 
                onChange={evento => aoAlterado(evento.target.value)}
            >
                <option value =""></option>
                {itens.map(item => <option key ={item} >{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa