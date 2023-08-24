import { render, screen } from '@testing-library/react'
import useEvent from '@testing-library/user-event'
import Formulario from './index'

describe('Form suit tests.', () => {
    test(
        'Should render a input field.', () => {
            render(<Formulario />)
            const fieldText = screen.getByPlaceholderText('Digite um valor')
            expect(fieldText).toBeInTheDocument()
        }
    )
    
    test(
        'Should render a input field of type number.', () => {
            render(<Formulario />)
            const fieldText = screen.getByPlaceholderText('Digite um valor')
            expect(fieldText).toHaveAttribute('type', 'number')
        }
    )
    
    test(
        'Should render a input field which can be filled', () => {
            render(<Formulario />)
            const fieldText = screen.getByPlaceholderText('Digite um valor')
            useEvent.type(fieldText, '50')
            expect(fieldText).toHaveValue(50)
        }
    )
})

test(
    'Should return onSubmit event', () => {
        const sendTransation = jest.fn()
        render(<Formulario realizarTransacao={sendTransation}/>)
        const botao = screen.getByRole('button')

        useEvent.click(botao)
        // esperado que ele foi chamado pelo menos uma vez ao clicar no botao.
        expect(sendTransation).toHaveBeenCalledTimes(1)
    }
)

test('Deve ser possível selecionar uma opção do elemento <select/>', () => {
    render(<Formulario />); // renderiza o componente
    const select = screen.getByRole('combobox'); // faz a consulta do elemento select
    useEvent.selectOptions(select, ['Depósito']); // simula a ação de selecionar uma opção do select

    expect(
      screen.getByRole('option', { name: 'Selecione um tipo de transação' })
        .selected
    ).toBe(false); // verifica se a opção de selecionar um tipo de transação não foi selecionada
    expect(screen.getByRole('option', { name: 'Depósito' }).selected).toBe(
      true
    ); // verifica se a opção de depósito foi selecionada
  });