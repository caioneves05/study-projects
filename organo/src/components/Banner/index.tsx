import React from 'react'
import './Banner.css'

interface BannerProps {
    enderecoImagem: string
    textoAltImagem?: string
}

export default function Banner({ enderecoImagem, textoAltImagem } : BannerProps) {
    return (
        <header className='banner'>
            <img src={enderecoImagem} alt={textoAltImagem} />
        </header>
    )
}