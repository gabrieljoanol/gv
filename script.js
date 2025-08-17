document.getElementById('sim').addEventListener('click', exibirDeclaracao);
document.getElementById('nao').addEventListener('click', moverBotaoNao);

function exibirDeclaracao() {
    document.getElementById('declaracao').style.display = 'block';
}

function moverBotaoNao() {
    var botaoNao = document.getElementById('nao');
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var randomX = Math.random() * (windowWidth - botaoNao.offsetWidth);
    var randomY = Math.random() * (windowHeight - botaoNao.offsetHeight);
    botaoNao.style.position = 'absolute';
    botaoNao.style.left = randomX + 'px';
    botaoNao.style.top = randomY + 'px';
}
