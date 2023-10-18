let tentativas = 6;

// Mapeamento de letras base para suas variações Letras
var mapeamentoLetras = {
    'A': ['Á', 'À', 'Â', 'Ã', 'A'],
    'E': ['É', 'È', 'Ê', 'E'],
    'I': ['Í', 'Ì', 'Î', 'I'],
    'O': ['Ó', 'Ò', 'Ô', 'Õ', 'O'],
    'U': ['Ú', 'Ù', 'Û', 'U'],
    'C': ['Ç', 'C']
};

// Função que é chamada quando um botão de letra é clicado
function verificaLetraEscolhida(letra) {
    var btnLetra = document.getElementById('tecla-' + letra);

    if (tentativas > 0) {
        inverterCoresBotao(btnLetra);
        comparaListas(letra);
        montarPalavraNaTela();
    }

}

// Inverter as cores do botão selecionado
function inverterCoresBotao(btnLetra) {
    btnLetra.style.backgroundColor = "#8b008b";
    btnLetra.style.color = "#ffffff";
    btnLetra.style.transition = '0.4s';
    btnLetra.disabled = true;
    btnLetra.style.pointerEvents = 'none';
}

// Verifica se a letra selecionada existe dentro da palavra secreta
function comparaListas(letra) {
    let variacoesLetras = mapeamentoLetras[letra] || [letra]; // Pega todas as variações da letra ou a própria letra

    let letraEncontrada = false; // Verificar se alguma letra foi encontrada

    // Coloca o array dentro do paramentro letras para comparar com a palavraSorteadaSecreta
    variacoesLetras.forEach((letras) => {
        const posicao = palavraSecretaSorteada.indexOf(letras);

        if (posicao >= 0) {
            letraEncontrada = true;
            for (let i = 0; i < palavraSecretaSorteada.length; i++) {
                if (palavraSecretaSorteada[i] === letras) {
                    listaDinamica[i] = letras;
                }
            }
        }
    });

    // Caso não tenha encontrado nenhuma letra, diminui 1 tentativa
    if (!letraEncontrada) {
        tentativas--;
        atualizarTentativasRestantes();
        carregarImagemForca();
    }

    // Verifica se todas as letras batem com as da lista dinamica    
    let vitoria = true;
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) {
        window.location.href = "vitoria.html?palavraRevelada=" + palavraSecretaSorteada;
        tentativas = 0;
    }
    else if (tentativas == 0) {
        window.location.href = "derrota.html?palavraRevelada=" + palavraSecretaSorteada;
    }

}

// Atualiza o número de tentativas no HTML
function atualizarTentativasRestantes() {
    const tentativasRestantes = document.getElementById('tentativasRestantes');
    tentativasRestantes.textContent = tentativas;
}