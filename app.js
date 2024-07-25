let numeroSecreto = 0;
console.log(numeroSecreto);

let intentos = 0;

function asignarTextoElemento(elemento, texto) { 
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
    }

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   console.log(numeroDeUsuario);

    if(numeroDeUsuario === numeroSecreto) { //compara números
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);//template string
        
        //habilita botón quitando condición
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acertó
        if(numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor'); 
        } else {
            asignarTextoElemento('p','El número secreto es mayor'); 
        }
        intentos++;
        limpiarCaja();
    }
   
    /* console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto); 
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroSecreto == numeroDeUsuario);*/
    return;

    
}
    reiniciarJuego();

function limpiarCaja() {
   document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'juego del número secreto'); 
    asignarTextoElemento('p', 'Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');//reiniciar atributos
}


