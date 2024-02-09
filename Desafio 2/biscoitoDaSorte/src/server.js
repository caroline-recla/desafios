//import fs from 'fs';


function fraseAleatoria() {
    const sorteio = Math.floor(Math.random() * (30 - 1 + 1) + 1);
    return sorteio
}


function trazerFrase() {

    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            const id = fraseAleatoria();
            const fraseFiltrada = data.find(frase => frase.id === id);
            const mensagem = fraseFiltrada.mensagem;
            document.getElementById("textoSorte").innerText = mensagem;
        })
        .catch(error => console.log(error.message));

}


export { trazerFrase };
