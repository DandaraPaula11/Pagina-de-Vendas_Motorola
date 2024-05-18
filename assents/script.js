
// bloco 1 - botao de Comprar
var comprar = window.document.getElementById('section-bloco-1-a1') // Escopo Global
function clicar() {
    // criar a variavel para ligar com o htmlm pela nome do ID
    comprar.style.background = 'red' //para mudar de cor quando clicar
}
function sair() {
    comprar.style.background = 'blue' //para mudar de cor quando sair
}

// bloco 1 - botao de Saiba Mais
var saiba = window.document.getElementById('section-bloco-1-a2') // Escopo Global
saiba.addEventListener('mouseenter', entrar)
// Listener,Ouvidores, Faz a ligação entre o HTML e o Javascript. Assim não é nessesario colocar nada no codigo html.
function entrar() {
    // criar a variavel para ligar com o htmlm pela nome do ID
    saiba.style.background = 'purple' //para mudar de cor quando clicar
}
