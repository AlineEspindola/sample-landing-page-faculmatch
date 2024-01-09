const observador = new IntersectionObserver( (entradas) => {
    entradas.forEach( (entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visivel')
            entrada.target.classList.add('animate__animated')
            entrada.target.classList.add('fadeInLeft-03s')
        }
    })
})

const secoes = document.querySelectorAll('.escondido')

secoes.forEach( (secao) => observador.observe(secao))

function obterDimensao(){
    var larguraTela = window.innerWidth;
    return larguraTela
}

function ativarHamburguer(){
    var nav = document.querySelector(".navbar")
    
    if(obterDimensao()<=1100){
        nav.classList.remove("navbar-expand-lg")
        nav.classList.add("navbar-expand-x1")
    }else{
        nav.classList.remove("navbar-expand-x1")
        nav.classList.add("navbar-expand-lg")
    }
}

ativarHamburguer();

window.onresize = function(){
    ativarHamburguer();
};