const celulas = document.querySelectorall(".celula");
let checarturno = true;
let turno;
const JOGADOR_X= "X";
const JOGADOR_O="O";
//inicializa a variavel jogoAcabou como falso, indicando que o jogo esta em andamento.
let jogoAcabou= false;

//Adiciona um evento de clique ao documento que é acionado quando qualquer elemento é clicado.
document.addEventlistener("click", (event)=>{
    //verifica se o elemento clicado possui a classe "celula" e se o jogo ainda não acabou.
    if (event.target.matches(".celula") && !jogoAcabou) {
        //chama a função jogar, passando o ID do elemento clicado como argumento.
        jogar(event.target.id);
    }
});  

function jogar(id) {
    const celula= document.getElementById(id);
    if (celula.textContent ==="") {
        turno= checarturno ? JOGADOR_X : JOGADOR_0;
        checarturno= !checarturno;
        celula.textcontent = turno;
        celula.classList.add(turno);
        celula.removeEventListener("click", jogar);
        verificarvencedor(turno);
    }
}