function obterDimensao(){
    var larguraTela = window.innerWidth;
    return larguraTela
}

function ativarHamburguer(){
    nav = document.querySelector(".navbar")
    console.log(obterDimensao())

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