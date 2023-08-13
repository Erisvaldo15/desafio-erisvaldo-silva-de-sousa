import { CardapioDaLanchonete } from "./cardapio-da-lanchone"

class Pedido {

    static #pagamentos = ['debito', 'credito', 'dinheiro']

    static error = null
    
    static validarPedido(metodoDePagamento, itensDoPedidoFormatado) {

        if(!itensDoPedidoFormatado.length) {
            this.error = 'Não há itens no carrinho de compra!';
            return
        }

        for (const item of itensDoPedidoFormatado) {

            const existeCodigo = CardapioDaLanchonete.getCardapio().find((objeto) => objeto['codigo'] === item.codigo)

            if(!existeCodigo) {
                this.error = 'Item inválido!'
                return
            }

            if(!item.quantidade || +item.quantidade === 0) {
                this.error = 'Quantidade inválida!'
                return
            }   

            if(
                item.codigo === 'chantily' && !itensDoPedidoFormatado.some(objeto => objeto['codigo'] === 'cafe') ||
                item.codigo === 'queijo' && !itensDoPedidoFormatado.some(objeto => objeto['codigo'] === 'sanduiche')
              ) 
            {
                this.error = 'Item extra não pode ser pedido sem o principal!'
                return
            }

        }

        if(!Pedido.#pagamentos.includes(metodoDePagamento)) {
            this.error = 'Forma de pagamento inválida!';
            return
        }

        if(this.error) {
            this.error = null
        }

        return true
    }

}

export { Pedido }