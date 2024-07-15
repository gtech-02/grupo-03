import CardProduto from "./componentes/CardProduto.js";

let listaProdutos = document.getElementById('lista-produtos')

let produtos = [
    {
        tipo: "tênis",
        nome: "K- Swiss V8",
        publico: "Masculino",
        precoAntigo: "$ 200",
        precoNovo: "$ 100"
    },
    {
        tipo: "tênis",
        nome: "K- Swiss V8",
        publico: "Masculino",
        precoAntigo: "$ 200",
        precoNovo: "$ 100"
    }
]

for (let i=0;i<produtos.length;i++){
    listaProdutos.innerHTML += CardProduto(produtos[i]);
}