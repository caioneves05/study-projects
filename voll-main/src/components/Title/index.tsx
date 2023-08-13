import Assessment from './assets/avaliacao.png'
import Graphic from './assets/grafico.png'
import Search from './assets/consulta.png'
import styled from 'styled-components'

interface Props {
    img?: string,
    children?: React.ReactNode
}

interface IImage {
    assesment: string,
    graph: string,
    serach: string
}

const StyleSpan = styled.span<Props>`
    background-repeat: no-repeat;
    background-position: center;
    background-size:cover;
    width: 25px;
    height: 25px;
    background-image: ${props => props.img ? `url(${props.img})` : 'none'}
`

const StyleTitle = styled.h2`
    color: var(--azul-claro);
`
const StyleContainer = styled.div`
    display: flex;
    aligm-items: center;
`

export const Title = ({ img, children }: Props) => {

    const listImages: IImage = {
        assesment: Assessment,
        graph: Graphic,
        serach: Search
    }

    return(
        <StyleContainer>
            {img && <StyleSpan img={listImages[img as keyof IImage]}/>}
            <StyleTitle>{children}</StyleTitle>
        </StyleContainer>
    )
}
