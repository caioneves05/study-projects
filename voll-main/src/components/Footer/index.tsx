import styled from 'styled-components'
import facebook from './assets/facebook.png'
import instagram from './assets/instagram.png'
import whatsapp from './assets/whatsapp.png'
import google from './assets/google.png'

const StyleFooter = styled.footer`
    height: 100%;
    color: white;
    padding: 1em;
    background-color: var(--azul-escuro);
    text-align: center;
`

const StyleList = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 10%;
    margin: 1em auto;
`

const StyleItem = styled.li`
    list-style-type: none;
`


export const Footer = () => {
    return(
        <StyleFooter>
            <StyleList>
                <StyleItem>
                    <a href="#">
                        <img src={facebook} alt="logo facebook" />
                    </a>
                </StyleItem>
                <StyleItem>
                    <a href="#">
                        <img src={whatsapp} alt="logo whatsapp" />
                    </a>
                </StyleItem>
                <StyleItem>
                    <a href="#">
                        <img src={instagram} alt="logo instagram" />
                    </a>
                </StyleItem>
                <StyleItem>
                    <a href="#">
                        <img src={google} alt="logo google" />
                    </a>
                </StyleItem>

            </StyleList>
            <p>2023© | Projeto Desenvolvido para fins educativos </p>
        </StyleFooter>
    )
}