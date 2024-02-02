const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const { resolve } = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//autenticar usuario 
const contasLogin = [
    { login: 'carol', senha: '123' },
    { login: 'dominike', senha: '321' },
];

function iniciarBatalhaNaval() {
    rl.question('Digite o seu login: ', (login) => {
        rl.question('Digite a senha: ', (senha) => {
            const usuario = contasLogin.find(id => id.login === login);
            if (usuario && usuario.senha === senha) {
                console.log('Bem vindo(a) ao jogo batalha Naval!');

                console.log('Escolha um dos números que você acha que o navio inimigo está!');

                for (let i = 0; i < matriz.length; i++) {
                    console.log(matriz[i].join(" "));
                }

                derrubaNavio();

            } else {
                console.log('Usuário e/ou senha incorretos');
                rl.close();
            }
        })
    })
}



async function leituraTerminal() {
    return await new Promise((resolve, reject) => {
        rl.question('Escolha o número que você acha que o navio inimigo está ', (chute) => {
            resolve(chute);
        })
    })
}

function procurarNaMatriz(chute) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === Number(chute)) {
                let matrizChute = [i, j];
                const chute = 'X'
                return matrizChute;
            }
        }
    }
}


function numeroAleatorio(matriz) {
    const linha = Math.floor(Math.random() * matriz.length);
    const coluna = Math.floor(Math.random() * matriz.length);
    const linhaColuna = [linha, coluna];
    return linhaColuna
}


async function derrubaNavio() {

    //funcao numero aleatorio
    let input = numeroAleatorio(matriz);
    let linha = input.slice(0, (input.length / 2));
    let coluna = input.slice((input.length / 2));

    //funcao leitura terminal
    let chute = await leituraTerminal();
    let matrizChute = [,];
    matrizChute = procurarNaMatriz(chute);
    //tratamento chute
    let linhaInput = matrizChute[0];
    let colunaInput = matrizChute[1];


    //numero de vidas
    let vidas = 3;
    let contador = 2;

    for (let cont = 1; cont < vidas; cont++) {
        if (linhaInput == linha && colunaInput == coluna) {
            console.log('Parabéns Você derrubou o navio inimigo!');
            console.log(linha);
            console.log(coluna);
            break
        } else {
            console.log('Você errou, tente novamente!');
            console.log('Vidas restantes:', vidas - cont);
            contador--;
            await leituraTerminal();
        }

        if (contador == 0) {
            console.log('Suas vidas acabaram e você perdeu a guerra! :(');
        }
    }
    console.log('O navio estava na linha:', linha, 'e coluna:', coluna);
    console.log('Obrigado por Jogar!');
}


//tratamento de erro para números fora do limite

const main = async () => {
    iniciarBatalhaNaval();
}

main()
