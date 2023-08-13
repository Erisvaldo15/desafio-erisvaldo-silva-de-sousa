class CardapioDaLanchonete {

    static #cardapio = [
        {codigo: 'cafe', preco: 3.0},
        {codigo: 'chantily', preco: 1.50},
        {codigo: 'suco', preco: 6.20},
        {codigo: 'sanduiche', preco: 6.50},
        {codigo: 'queijo', preco: 2.0},
        {codigo: 'salgado', preco: 7.25},
        {codigo: 'combo1', preco: 9.50},
        {codigo: 'combo2', preco: 7.50},
    ]

    static getCardapio() {
        return CardapioDaLanchonete.#cardapio
    }

}

export { CardapioDaLanchonete }