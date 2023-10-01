const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
botao.addEventListener("click", () => {

    desselecionarPersonagem();
    desselecionarBotao();

botao.classList.add("selecionado");
personagens[indice].classList.add("selecionado");
} );
});



function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    if (botaoSelecionado) {
      botaoSelecionado.classList.remove("selecionado");
    }
  }
  
  function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    if (personagemSelecionado) {
      personagemSelecionado.classList.remove("selecionado");
    }
  }
  
  
 
  
  
  
  
  

