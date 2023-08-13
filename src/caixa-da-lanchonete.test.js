import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js";

describe('CaixaDaLanchonete', () => {

    const validaTeste = (formaDePagamento, resultadoEsperado, itens) => {
        const resultado = new CaixaDaLanchonete()
            .calcularValorDaCompra(formaDePagamento, itens);

            console.log(resultado)

        expect(resultado.replace("\xa0", " ")).toEqual(resultadoEsperado);
    };

    test.each([
        ['com carrinho vazio', 'dinheiro', 'Não há itens no carrinho de compra!', []],
        ['Compra sem o item principal', 'dinheiro', 'Item extra não pode ser pedido sem o principal!', ['chantily, 1']],
        ['Pagamento inválido', 'boleto', 'Forma de pagamento inválida!', ['cafe,1']],
        ['Sem a quantidade', 'dinheiro', 'Quantidade inválida!', ['combo2']],
        ['item não existe no cardápio', 'dinheiro', 'Item inválido!', ['combo']],
        ['Pedido válido', 'dinheiro', 'R$ 600,00', ['cafe,200']],
        ['Pedido válido com vários itens do cardápio', 'credito', 'R$ 19,50', ['cafe, 1', 'chantily, 1', 'sanduiche, 2', 'queijo,1']],
        ['Conferir se erro de quantidade de itens no pedido informado não interfere no sistema', 'credito', 'R$ 3,00', ['cafe, 1,2,34,5']],
    ])('compra %p em %p deve resultar em %p', (_, formaDePagamento, resultadoEsperado, itens) =>
        validaTeste(formaDePagamento, resultadoEsperado, itens));
});
