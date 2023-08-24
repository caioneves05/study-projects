import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App Component suit Tests', () => {
    it('Should render list items', () => {
        const { getByText } = render(<App />)

        expect(getByText('Caio')).toBeInTheDocument()
    })

    it('Should be able to add remove item from to the list', async () => {
        const { getAllByText, debug, queryByText} = render(<App />)
        
        const removeButtons = getAllByText('Remover')
        //const addButton = getByText('Adicionar')

        debug()

        userEvent.click(removeButtons[0])

        await waitFor(() => {
            expect(queryByText('Caio')).not.toBeInTheDocument()
        })

        debug()
    })
})