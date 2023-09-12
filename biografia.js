let livros= [
    {
        id: 0,
        nome: "Nada pode me ferir",
        img: "/img/david.webp",
        genero: "Biografia",
        autor: "David Goggins",
        quantidade: 0,
        valor: 22.50
    },
    {
        id: 8,
        nome: "Em Busca de mim",
        img: "/img/imgBiografia/violaDavis.jpg",
        genero: "Biografia",
        autor: "Viola Davis",
        quantidade: 0,
        valor: 22.50
    },
    {
        id: 9,
        nome: "Maioridade penal: 18 anos de histórias inéditas",
        img: "/img/imgBiografia/ceni.jpg",
        genero: "Biografia",
        autor: "André Plihal",
        quantidade: 0, 
        valor: 40.00
    }
]

livros.map((livro) => {
    let Idlivro = document.getElementById("biografia")
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

function AtualizarCarrinho(){
    let carrinho = document.getElementById("carrinho");
  
    while (carrinho.firstChild) {
      carrinho.removeChild(carrinho.firstChild);
    }
  
    // Adiciona o novo conteúdo
    carrinho.innerHTML = livros.map((livro) => {
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
    livrosBiografia[index].addEventListener("click", function(){
       let key = this.getAttribute("key")
       livros[key].quantidade ++ 
       AtualizarCarrinho()
       return false;
    })
    
}