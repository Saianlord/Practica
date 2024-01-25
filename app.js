let numeroSecreto = 0;

let intento = 1;

let pluraloSingular = 'intento';

let maxIntentos = 4;

let intentosRestantes = 2;

let interruptor = false;

//Funcion que edita el texto de los elementos

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Funcion que contiene todas los elementos con los que inicia el juego
function herramientasIniciales(){
    numeroSecreto = generarNumeroSecreto();
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p','Indica un número del 1 al 10 <br>¡Tienes 3 intentos!');
    activaroDesactivarbotones();
}

// Funcion que genera el numero de forma aleatoria
function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

// Funcion para activar o desactivar boton1

function activaroDesactivarbotones(interruptor){
    let boton1 = document.getElementById('boton1');
    let boton2 = document.getElementById('boton2');
    if(interruptor == true){
        boton1.disabled = true;
        boton2.disabled = false;
    } else{
        boton1.disabled = false;
        boton2.disabled = true;
    }
}

// Funcion que verifica si el numero es acertado o no
function verificarIntento(){
    while (intento<maxIntentos){
        let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
        if (numeroSecreto === numeroUsuario) {
            asignarTextoElemento('h1','¡El número que buscas es menor!');
            asignarTextoElemento('p', '¡Acertaste el número secreto!')
            interruptor = true
            activaroDesactivarbotones(interruptor)
            break
        } else {
            if (numeroUsuario > numeroSecreto){
                asignarTextoElemento('h1','¡El número que buscas es menor!');
                asignarTextoElemento('p', `Intentos disponibles: ${intentosRestantes}`)
            } else {
                asignarTextoElemento('h1','¡El número que buscas es mayor!');
                asignarTextoElemento('p', `Intentos disponibles: ${intentosRestantes}`)
            }
            intento++;
            intentosRestantes--;
            pluraloSingular = 'intentos';
            if (intento==maxIntentos){
                let mensaje = alert('Haz alcanzado el número máximo de intentos');
                interruptor = true
                activaroDesactivarbotones(interruptor)
            }
            break
            
        }   
    } 
    return;
}

// Funcion para reiniciar el juego

function reiniciarJuego(){
    interruptor = false;
    intento = 1
    intentosRestantes = 2;
    herramientasIniciales()
}

herramientasIniciales()



