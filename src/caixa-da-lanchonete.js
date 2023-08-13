import { CardapioDaLanchonete } from "./cardapio-da-lanchone"
import { Pedido } from "./pedido"

class CaixaDaLanchonete {

    valorDacompra = 0

    calcularValorDaCompra(metodoDePagamento, itens) {

        const itensDoPedidoFormatado = itens.map((item) => {
            return {
                codigo: item.split(',')[0],
                quantidade: item.split(',')[1]
            }
        })

        Pedido.validarPedido(metodoDePagamento, itensDoPedidoFormatado)

        if(Pedido.error) {
            return Pedido.error
        }

        itensDoPedidoFormatado.map(itemDoPedido => {

            const itemDoCardapio = CardapioDaLanchonete.getCardapio().find(itemDoCardapio => itemDoCardapio['codigo'] === itemDoPedido['codigo'])

            if(itemDoCardapio) {
                this.valorDacompra += itemDoCardapio.preco * itemDoPedido.quantidade
            }
            
        })

        return `R$ ${this.valorDacompra.toFixed(2).replace('.', ',')}`
    }

}

export { CaixaDaLanchonete };