export default function CardProduto(props) {
    return `<div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
        <small>${props.tipo}</small>
          <h5 class="card-title">${props.nome}</h5>
          <h5 class="card-title">${props.publico}</h5>
          <h5 class="card-title">${props.precoAntigo}</h5>
          <h5 class="card-title">${props.precoNovo}</h5>
        </div>
      </div>
    </div>`
}