var parrafo = document.getElementById('txtBienvenida')
parrafo.innerHTML = 'Hola con js'

var segundoParrafo = document.getElementById('segundoParrafo')

function clickEnElBoton(){
    segundoParrafo.innerHTML = 'Le di click en el boton'
}

var numero = document.getElementById('numero')
var numeroTypoNumber = parseInt(numero.innerHTML)

function clickEnElBotonResta(){
    numeroTypoNumber = numeroTypoNumber - 1 
    numero.innerHTML = numeroTypoNumber
}

function clickEnElBotonSuma(){
    numeroTypoNumber = numeroTypoNumber + 1 
    numero.innerHTML = numeroTypoNumber
}

var saludo = document.getElementById('saludo')
function saludar(){
    if(saludo.innerHTML == "Hola"){
        saludo.innerHTML = "Adios"
    }else{
        saludo.innerHTML = "Hola"
    }
}


var inputNumber = document.getElementById('inputNumber')
var multiploDiez = document.getElementById('multiploDiez')

function multiplicar(){
    var numeroMultiplicar = parseInt(inputNumber.value)
    multiploDiez.innerHTML = numeroMultiplicar * 10
}