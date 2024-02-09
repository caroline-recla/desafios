//botao de recarregar para nova sorte 
import { trazerFrase }  from './server.js';


document.addEventListener("DOMContentLoaded", () => {
    const botaoCarregar = document.getElementById("recarregarBotao");
    botaoCarregar.addEventListener('click', trazerFrase);
})


document.addEventListener("DOMContentLoaded",trazerFrase)