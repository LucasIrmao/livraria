let livros = [
    {
        id: 5,
        nome: "É Assim que Acaba",
        autor: "Colleen Hoover",
        genero: "romance",
        img: "/img/imgRomance/assimqueAcaba.jpg",
        quantidade: 0,
        valor: 30.00
    },
    {
        id:6,
        nome: "Quem é você, Alaska?",
        genero: "romance",
        autor:  "John Green",
        img: "/img/imgRomance/quemehvc.jpg",
        quantidade: 0,
        valor: 35
    },
    {
        id:7,
        nome: "A culpa é das estrelas",
        genero: "romance",
        autor:  "John Green",
        img: "/img/imgRomance/culpadasestrelas.jpg",
        quantidade: 0,
        valor: 35
    }
]

livros.map((livro)=>{
    if(livro.genero == "romance"){
    let Idlivro = document.getElementById("romance")
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
}})



function Atualizarcar() {
    console.log(livros)
  }


  let links = document.getElementsByClassName("car")
  for (let index = 0; index < links.length; index++) {
      links[index].addEventListener("click", function(){
         let key = this.getAttribute("key")
         livros[key].quantidade ++ 
         AtualizarCarrinho()
         return false;
      })
      
  }