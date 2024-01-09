const observador = new IntersectionObserver( (elementos) => {
    for(var i = 0; i < elementos.length; i++){
        if(elementos[i].isIntersecting){
            const entrada = elementos[i].target || elementos[i].srcElement

            switch(entrada.id){
                case 'desenhoLivros':
                    animarfadeInLeft(elementos[i])
                    break
                case 'tituloDemanda':
                    animarfadeInUp700ms(elementos[i])
                    break
                case 'subtextoDemanda':
                    animarfadeInUp1400ms(elementos[i])
                    break
            }
        }
    }
})

function animarfadeInLeft(elemento){
    elemento.target.classList.add('visivel')
    elemento.target.classList.add('animate__animated')
    elemento.target.classList.add('animate__fadeInLeft')
}

function animarfadeInUp700ms(elemento){
    elemento.target.classList.add('visivel')
    elemento.target.classList.add('animate__animated')
    elemento.target.classList.add('fadeInUp-700ms')
}

function animarfadeInUp1400ms(elemento){
    elemento.target.classList.add('visivel')
    elemento.target.classList.add('animate__animated')
    elemento.target.classList.add('fadeInUp-1400ms')
}

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