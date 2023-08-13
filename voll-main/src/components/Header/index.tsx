import styled from 'styled-components'
import logo from './assets/logo.png'
import profile from './assets/perfil.png'

const StyleHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 4em;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: .1;
`

const StyleLink = styled.a`
    color: var(--azul-escuro);
    font-weight: 700; 
`

export const Header = () => {
    return(
        <StyleHeader>
            <img src={logo} alt="logo Voll" />
            <Container>
                <img src={profile} alt="profile image user" />
                <StyleLink href="#">Exit</StyleLink>
            </Container>
        </StyleHeader>
    )
}