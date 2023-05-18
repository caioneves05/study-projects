import React from 'react'
import { ReactElement } from 'react'
import './Botao.css'

interface BotaoProps {
    children: ReactElement | String
}

const Botao = (props: BotaoProps) => {
    return(
        <button className='botao'>{props.children}</button>
    )
}

export default Botao