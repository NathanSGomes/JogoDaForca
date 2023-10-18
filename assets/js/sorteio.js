let palavraSecretaSorteada;
let palavraCategoria;
let listaDinamica = [];
let tempoRestante = 2 * 60; // 2 minutos em segundos

function criarPalavraSecreta() {
    const listas = [paises, frutas, animais]; // Coloca os Arrays dentro de um Array

    // Sorteia qual Array será escolhido para fornecer a palavra secreta
    const indexListaEscolhida = parseInt(Math.random() * listas.length);
    const listaEscolhida = listas[indexListaEscolhida];

    // Sorteia um dentro do Array escolhido
    const indexPalavra = parseInt(Math.random() * listaEscolhida.length);
    // Puxa o nome do número (no caso a palavra secreta)
    palavraSecretaSorteada = listaEscolhida[indexPalavra].nome;
    // Puxa a categoria do número (no caso a dica)
    palavraCategoria = listaEscolhida[indexPalavra].categoria;

    montarPalavraNaTela();

    //Faz o temporizador atualiuzara cada segundo e caso chega a 0 encaminha para a tela de derrota
    setInterval(function () {
        if (tempoRestante > 0) {
            tempoRestante--;
            atualizarTemporizador();
        } else {
            window.location.href = "derrota.html?palavraRevelada=" + palavraSecretaSorteada;
        }
    }, 1000); // Atualiza a cada 1 segundo

    atualizarTemporizador(); // Atualize o temporizador inicialmente
}



function montarPalavraNaTela() {
    // Pega a categoria e exibe na tela (em forma de dica)
    const categoria = document.getElementById('categoriaPalavra');
    categoria.innerHTML = palavraCategoria;

    // Pega a palavra, mas não a exibe na tela
    const palavraTela = document.getElementById('palavraSecreta');
    palavraTela.innerHTML = "";

    // Laço de repetição para exibir os espaços da palavra secreta letra por letra e indentificar espaço entre as palavras
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica[i] == undefined) {
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            } else {
                listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }

        }
        else {
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            } else {
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }
        }
    }
}

// Cuida do timer dentro do html
function atualizarTemporizador() {
    const temporizadorMsg = document.getElementById('temporizador');
    const minutos = Math.floor(tempoRestante / 60);
    const segundos = tempoRestante % 60;
    temporizadorMsg.innerText = `Tempo restante: ${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
}

criarPalavraSecreta();