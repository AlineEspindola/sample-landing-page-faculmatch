const observador = new IntersectionObserver( (elementos) => {
    for(var i = 0; i < elementos.length; i++){
        if(elementos[i].isIntersecting){
            const entrada = elementos[i].target || elementos[i].srcElement

            if(verificarTamanho() == 'grande'){
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
                    case 'tituloProjeto':
                        animarfadeInUp(elementos[i])
                        break
                    case 'textoProjeto':
                        animarfadeInUp700ms(elementos[i])
                        break
                    case 'imagemProjeto':
                        animarfadeInUp1400ms(elementos[i])
                        break
                    case 'tituloEquipe':
                        animarfadeInUp(elementos[i])
                        break
                    case 'textoEquipe':
                        animarfadeInUp700ms(elementos[i])
                        break
                    case 'card1':
                        animarfadeInUp1400ms(elementos[i])
                        break
                    case 'card2':
                        animarfadeInUp2100ms(elementos[i])
                        break
                    case 'card3':
                        animarfadeInUp2800ms(elementos[i])
                        break
                    case 'card4':
                        animarfadeInUp3500ms(elementos[i])
                        break
                }
            }else{
                switch(entrada.id){
                    case 'tituloDemanda':
                        animarfadeInUp(elementos[i])
                        break
                    case 'subtextoDemanda':
                        animarfadeInUp(elementos[i])
                        break
                    case 'desenhoLivros':
                        animarfadeInLeft(elementos[i])
                        break
                    case 'tituloProjeto':
                        animarfadeInUp(elementos[i])
                        break
                    case 'textoProjeto':
                        animarfadeInUp(elementos[i])
                        break
                    case 'imagemProjeto':
                        animarfadeInUp(elementos[i])
                        break
                    case 'tituloEquipe':
                        animarfadeInUp(elementos[i])
                        break
                    case 'textoEquipe':
                        animarfadeInUp(elementos[i])
                        break
                    case 'card1':
                        animarfadeInUp(elementos[i])
                        break
                    case 'card2':
                        animarfadeInUp(elementos[i])
                        break
                    case 'card3':
                        animarfadeInUp(elementos[i])
                        break
                    case 'card4':
                        animarfadeInUp(elementos[i])
                        break
                }
            }
        }
    }
})

function animarfadeInLeft(elemento){
    elemento.target.classList.add('visivel')
    elemento.target.classList.add('animate__animated')
    elemento.target.classList.add('animate__fadeInLeft')
}

function animarfadeInLeft1400ms(elemento){
    elemento.target.classList.add('visivel')
    elemento.target.classList.add('animate__animated')
    elemento.target.classList.add('fadeInLeft-1400ms')
}

function animarfadeInUp(elemento){
    elemento.target.classList.add('visivel')
    elemento.target.classList.add('animate__animated')
    elemento.target.classList.add('animate__fadeInUp')
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

function animarfadeInUp2100ms(elemento){
  elemento.target.classList.add('visivel')
  elemento.target.classList.add('animate__animated')
  elemento.target.classList.add('fadeInUp-2100ms')
}

function animarfadeInUp2800ms(elemento){
  elemento.target.classList.add('visivel')
  elemento.target.classList.add('animate__animated')
  elemento.target.classList.add('fadeInUp-2800ms')
}

function animarfadeInUp3500ms(elemento){
  elemento.target.classList.add('visivel')
  elemento.target.classList.add('animate__animated')
  elemento.target.classList.add('fadeInUp-3500ms')
}

const secoes = document.querySelectorAll('.escondido')

secoes.forEach( (secao) => observador.observe(secao))

function obterDimensao(){
    var larguraTela = window.innerWidth
    return larguraTela
}

function verificarTamanho(){
    if(obterDimensao() > 878){
        return 'grande'
    }else{
        return 'pequena'
    }
}

function ativarHamburguer(){
    var nav = document.querySelector(".navbar")
    
    if(obterDimensao() <= 1100){
        nav.classList.remove("navbar-expand-lg")
        nav.classList.add("navbar-expand-x1")
    }else{
        nav.classList.remove("navbar-expand-x1")
        nav.classList.add("navbar-expand-lg")
    }
}

ativarHamburguer();

window.onresize = function(){
    ativarHamburguer()
};