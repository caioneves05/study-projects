export const formatedCurrency = (value) => {
    const valueFormated = parseInt(value)
    return valueFormated.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}