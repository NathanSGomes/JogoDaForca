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
    const posicao = palavraSecretaSorteada.indexOf(letra)

    // Caso não exista a letra dentro da palavra diminiu 1 tentativa
    if (posicao < 0) {
        tentativas--;
        atualizarTentativasRestantes(); // Chama a função para atualizar o número de tentativas no HTML
        carregarImagemForca();
    }

    // Caso a letra esteja dentro da palavra secreta não diminui as chances
    else {
        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    // Verifica se todas as letras batem com as da lista dinamica    
    let vitoria = true;
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) {
        window.location.href = "pages/vitoria.html?palavraRevelada=" + palavraSecretaSorteada;
        tentativas = 0;
    }
    else if (tentativas == 0) {
        window.location.href = "pages/derrota.html?palavraRevelada=" + palavraSecretaSorteada;
    }

}

// Atualiza o número de tentativas no HTML
function atualizarTentativasRestantes() {
    const tentativasRestantes = document.getElementById('tentativasRestantes');
    tentativasRestantes.textContent = tentativas;
}