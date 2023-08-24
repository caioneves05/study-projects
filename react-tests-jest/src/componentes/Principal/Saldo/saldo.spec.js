import { render, screen } from '@testing-library/react'
import Saldo from './index'

describe('Component <Saldo />', () => {
    test(
        'Should render value of brazillian type monetary.', () => {
        const value = 100
            render(<Saldo saldo={value}/>)
        
        const sald = screen.getByText('R$ 100')
        expect(sald).toHaveTextContent('R$ 100')
        }
    )
})