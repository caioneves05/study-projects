import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigitar = (e) => {
        props.aoAlterado(e.target.value)
    } 

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor}  onChange={aoDigitar} required={props.obrigatorio} type="text" placeholder={props.placeholder} />
        </div>
    )
}


export default CampoTexto