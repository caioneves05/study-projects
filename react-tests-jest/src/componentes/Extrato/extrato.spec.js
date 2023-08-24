import { render, screen } from "@testing-library/react";
import Extrato from './index'

test(
    'Should render transation list.', () => {
        const transations = [{
            transacao: 'Depósito',
            valor: 100,
        }]
        render(<Extrato transacoes={transations}/>)
        const list = screen.getByRole('listitem')
        expect(list).toBeInTheDocument()
    }
)