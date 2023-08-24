import { render, screen } from "@testing-library/react"
import Cabecalho from './index'

test(
    "Should render user name logged", () => {
        render(<Cabecalho/>)
        // query 
        const nomeUser = screen.getByText('Joana Fonseca Gomes')
        expect(nomeUser).toBeInTheDocument()
    }
)