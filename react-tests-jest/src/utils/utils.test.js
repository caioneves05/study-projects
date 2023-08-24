import { calculaNovoSaldo } from './index'

describe('Transation suit tests', () => {
    test(
        'Shoul return balance amount updated with income', () => {
            const calculateAmount = jest.fn(value => value + value * 0.005)
            const value = 100
    
            const newValue = calculateAmount(value)
    
            expect(newValue).toBe(100.5)
            expect(calculateAmount).toBeCalled()
            expect(calculateAmount).toHaveBeenCalledWith(value)
        }
    )

    test(
        '', () => {
            const transation = {
                transacao: 'Depósito',
                valor: 50
            }

            const newValue = calculaNovoSaldo(transation, 100)

            expect(newValue).toBe(150)
        }
    )
})

