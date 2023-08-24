/*
import { render, screen } from '@testing-library/react'
import estilos from './Extrato.module.css';
import Transacoes from './index'

test(
    'Should render the same component with updated props.', () => {
        const transation = {
            transacao: 'Depósito',
            valor: 100
        }
        
        const { rerender } = render(<Transacoes estilos={estilos} transacao={transation}/>)
        const typeTransation = screen.getByTestId('tipoTransacao')
        const valueTransation = screen.getByTestId('valorTransacao')

        expect(typeTransation).toHaveTextContent('Depósito')
        expect(valueTransation).toHaveTextContent('R$ 100')

        const newTransation = {
            transacao: 'Transferência',
            valor: 50,
        }
        rerender(<Transacoes estilos={estilos} transation={newTransation}/> )
        const newTypeTransation = screen.getByTestId('tipoTransacao')
        const newValueTransation = screen.getByTestId('valorTransacao')

        expect(newTypeTransation).toHaveTextContent('Transferência')
        expect(newValueTransation).toHaveTextContent('- R$ 50')
    }
)
*/