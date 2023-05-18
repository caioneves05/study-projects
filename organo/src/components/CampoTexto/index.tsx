import React from 'react'
import { useState } from 'react'
import './CampoTexto.css'

interface CampoDeTextoProps {
    aoAlterado: (valor: string) => void
    label: string
    valor: string
    obrigatorio?: boolean
    placeholder: string
    tipo?: 'text' | 'password' | 'date' | 'email' | 'number'
}

const CampoTexto = ({ aoAlterado, label, placeholder, valor, obrigatorio = false, tipo = 'text' }: CampoDeTextoProps) => {

    const aoDigitar = (e: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(e.target.value)
    } 

    return(
        <div className="campo-texto">
            <label>{label}</label>
            <input 
                value={valor}  
                onChange={aoDigitar} 
                required={obrigatorio} 
                placeholder={placeholder} 
                type={tipo}
                />
        </div>
    )
}


export default CampoTexto