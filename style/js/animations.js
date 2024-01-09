const observador = new IntersectionObserver( (entradas) => {
    for(var i = 0; i < entradas.length; i++){
        if(entradas[i].isIntersecting){
            const entrada = entradas[i].target || entradas[i].srcElement

            switch(entrada.id){
                case 'desenhoLivros':
                    entradas[i].target.classList.add('visivel')
                    entradas[i].target.classList.add('animate__animated')
                    entradas[i].target.classList.add('fadeInLeft-03s')
                    break
                case 'tituloDemanda':
                    entradas[i].target.classList.add('visivel')
                    entradas[i].target.classList.add('animate__animated')
                    entradas[i].target.classList.add('animate__fadeInUp')
                    entradas[i].target.classList.add('animate__delay-1s')
                    break
                case 'subtextoDemanda':
                    entradas[i].target.classList.add('visivel')
                    entradas[i].target.classList.add('animate__animated')
                    entradas[i].target.classList.add('fadeInUp-17s')
                    break
            }
        }
    }
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