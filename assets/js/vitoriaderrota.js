// Função para voltar para a página principal (index.html)
function voltarParaIndex() {
    window.location.href = "../../index.html";
}

// Recupere a palavra revelada da URL da página principal
const urlParams = new URLSearchParams(window.location.search);
const palavraRevelada = urlParams.get("palavraRevelada");
document.getElementById("palavraRevelada").textContent = palavraRevelada;