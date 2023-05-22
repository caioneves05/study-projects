import './Time.css'
import Colaborador from '../Colaborador'
import { IColaborador } from '../../compartilhado/interfaces/IColaborador'

interface TimeProps {
    corPrimaria: string
    colaboradores: IColaborador[]
    corSecundaria: string
    nome: string
}

const Time = (props: TimeProps) => {

    const css = { backgroundColor: props.corSecundaria }

    return(
        //Renderização condicional
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={ {borderColor: props.corPrimaria}} >{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => 
                    <Colaborador 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem}
                        key={colaborador.nome}
                        corDeFundo={props.corPrimaria}
                        date={colaborador.date} hv
                    />
                )}
            </div>
        </section>
        : <> </>
    )
}

export default Time