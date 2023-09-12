let livrosSuspense = [
    {
        id: 3,
        nome: "Bom dia, Veronica",
        autor: "Raphael Montes",
        genero: "Suspense",
        img: "/img/imgSuspense/bomdiaVeronica.jpg",
        quantidade: 0,
        valor: 30.00
    },
    {
        id: 4,
        nome: "O Iluminado",
        autor: "Stephen King",
        genero: "Suspense",
        quantidade: 0,
        img: "/img/imgSuspense/iluminado.jpg",
        valor: 30.00
    },
]

livrosSuspense.map((livro)=>{
    let Idlivro = document.getElementById("suspense")
    let newElement = document.createElement("div")
    newElement.className = "livro-single"
    newElement.innerHTML = `
        <img src= ${livro.img} />
        <p> ${livro.nome} </p>
        <p> ${livro.autor} </p>
        <p> R$${livro.valor.toFixed(2)}</p>
        <a key=${livro.id} class= "car" href="#">Adicionar ao carrinho
    `
    Idlivro.appendChild(newElement)
})
function Atualizarcar(){
    let carrinho = document.getElementById("carrinho");
  
    while (carrinho.firstChild) {
      carrinho.removeChild(carrinho.firstChild);
    }
  
    // Adiciona o novo conteúdo
    carrinho.innerHTML = livrosSuspense.map((livro) => {
      if (livro.quantidade > 0) {
        return `
        <p>Carrinho
        <p> Livro:  ${livro.nome} | Autor: ${livro.autor} </p>
        <p>Quantidade: ${livro.quantidade} | Total: R$${(livro.quantidade * livro.valor)}
        <button onclick="FinalizarCompra">Finalizar Compra</button>
        `;
      }
    }).join("");
}

var links = document.getElementsByClassName("car")
for (let index = 0; index < links.length; index++) {
    links[index].addEventListener("click", function(){
       let key = this.getAttribute("key")
       Atualizarcar()
       return false;
    })
    
}
