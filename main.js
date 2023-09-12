let livros= [
    {
        id: 0,
        nome: "Nada pode me ferir",
        img: "/img/david.webp",
        genero: "Biografia",
        autor: "David Goggins",
        quantidade: 0,
        valor: 22.50,
        classe: "Best-seller"
    },
    {   
        id: 1,
        nome: "O Poder do Hábito",
        genero: "romance",
        autor: "Charles Duhigg",
        img: "/img/51Pw06uU8FL._SY445_SX342_.jpg",
        quantidade: 0,
        valor: 22.50,
        classe: "Best-seller"

    },
    { 
        id: 2,
        nome: "Dom Casmurro",
        autor: "Machado de Assis",
        genero: "romance",
        img: "/img/domcasmurro.jpg",
        quantidade: 0,
        valor: 30.00,
        classe: "classico"
    },
    
]
livros.map((livro) =>{
    if(livro.classe == "Best-seller"){
    let Idlivro = document.getElementById("livrosClassicos")
    let newElement = document.createElement("div")
    newElement.className = "livro-single-home"
    newElement.innerHTML = `
        <img src= ${livro.img} />
        <p> ${livro.nome} </p> 
        <p> ${livro.autor} </p>
        <p> R$${livro.valor.toFixed(2)}</p>
        <a key=${livro.id} class= "car" href="#">Adicionar ao carrinho
    `
    Idlivro.appendChild(newElement)
}})

livros.map((livro)=>{
    if(livro.classe == "classico"){
    let Idlivro = document.getElementById("best-seller")
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
    
    }
})
function AtualizarCarrinho() {
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
    links[index].addEventListener("click", function(){
       let key = this.getAttribute("key")
       livros[key].quantidade ++ 
       AtualizarCarrinho()
       return false;
    })
    
}