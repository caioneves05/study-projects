import React from 'react'
import style from './relogio.module.scss'

const Relogio = () => {
    return(
        <React.Fragment>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
        </React.Fragment>
    )
}

export default Relogio