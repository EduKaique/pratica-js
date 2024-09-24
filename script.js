const title = document.getElementById("titulo");
const helloBtn = document.getElementById("botao-ola")
const changeTitle = document.getElementById("btn-mudar-titulo")

helloBtn.addEventListener("click", () => {
    alert("Olá!")
})

changeTitle.addEventListener("click", function() {
    title.textContent = "O titulo foi  mudado utilizando JS!"
})

const mensagens = document.getElementsByClassName("mensagem2")

const botaoDeMudar = document.createElement("button");
botaoDeMudar.textContent = "Modificar frases";
document.querySelector(".container").appendChild(botaoDeMudar)


botaoDeMudar.addEventListener("click", function() {
    for (let i = 0; i < mensagens.length; i++){
        mensagens[i].textContent = `Frase Modificada ${i + 1} utilizando JS!`
    }
})