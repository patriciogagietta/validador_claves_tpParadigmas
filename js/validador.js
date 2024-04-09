class Automata{
    constructor(estados, estadoFinal, simbolos, transiciones) {
        this.estados = estados;
        this.estadoFinal = estadoFinal;
        this.simbolos = simbolos;
        this.transiciones = transiciones;
    }

    letrasMinusculas = "abcdefghijklmnopqrstuvwxyz".split("")
    letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    simbolos_array = ["!", "¡", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "`", "~", "-", "=", "[", "]", "{", "}", ";", ":", "´", '"', ",", ".", "<", ">", "/", "?", "¿", "|", "\\", "°", "'", " "]

    validacion(contraseña){
        let estadoActual = 'I';

        for (let caracter of contraseña) {

            if (this.letrasMinusculas.includes(caracter)) {
                caracter = 'min'
            } else if (this.letrasMayusculas.includes(caracter)) {
                caracter = 'may'
            } else if (this.numeros.includes(caracter)) {
                caracter = 'num'
            } else if (this.simbolos_array.includes(caracter))
                caracter = 'sim'

            estadoActual = this.transiciones[estadoActual][caracter];
        }

        return this.estadoFinal.includes(estadoActual);
    }
}

const estados = Array.from({ length: 23 }, (_, i) => i);
const estadoFinal = 'FINAL';
const simbolos = ['min', 'may', 'num', 'sim'];

const boton = document.querySelector("#boton")
const parrafoContraseña = document.querySelector("#parrafo-contraseña")
const inputContraseña = document.querySelector("#contraseña")
const botonContraseña = document.querySelector("#boton-contraseña")

const transiciones = {
    'I': { 'min': 'IV', 'may': 'II', 'num': 'III', 'sim': "MUERTE" },
    'II': { 'min': 'VI', 'may': 'VII', 'num': 'V', 'sim': "MUERTE" },
    'III': { 'min': 'VIII', 'may': 'V', 'num': 'IX', 'sim': "MUERTE" },
    'IV': { 'min': 'X', 'may': 'VI', 'num': 'VIII', 'sim': "MUERTE" },
    'V': { 'min': 'XII', 'may': 'XI', 'num': 'XI', 'sim': "MUERTE" },
    'VI': { 'min': 'XIII', 'may': 'XIII', 'num': 'XII', 'sim': "MUERTE" },
    'VII': { 'min': 'XIII', 'may': 'XIV', 'num': 'XI', 'sim': "MUERTE" },
    'VIII': { 'min': 'XV', 'may': 'XII', 'num': 'XV', 'sim': "MUERTE" },
    'IX': { 'min': 'XV', 'may': 'XI', 'num': 'XVI', 'sim': "MUERTE" },
    'X': { 'min': 'XVII', 'may': 'XIII', 'num': 'XV', 'sim': "MUERTE" },
    'XI': { 'min': 'XXI', 'may': 'XVIII', 'num': 'XVIII', 'sim': "MUERTE" },
    'XII': { 'min': 'XXI', 'may': 'XXI', 'num': 'XXI', 'sim': "MUERTE" },
    'XIII': { 'min': 'XX', 'may': 'XX', 'num': 'XXI', 'sim': "MUERTE" },
    'XIV': { 'min': 'XX', 'may': 'XIV', 'num': 'XVIII', 'sim': "MUERTE" },
    'XV': { 'min': 'XIX', 'may': 'XXI', 'num': 'XIX', 'sim': "MUERTE" },
    'XVI': { 'min': 'XIX', 'may': 'XVIII', 'num': 'XVI', 'sim': "MUERTE" },
    'XVII': { 'min': 'XVII', 'may': 'XX', 'num': 'XIX', 'sim': "MUERTE" },
    'XVIII': { 'min': 'FINAL', 'may': 'XVIII', 'num': 'XVIII', 'sim': "MUERTE" },
    'XIX': { 'min': 'XIX', 'may': 'FINAL', 'num': 'XIX', 'sim': "MUERTE" },
    'XX': { 'min': 'XX', 'may': 'XX', 'num': 'FINAL', 'sim': "MUERTE" },
    'XXI': { 'min': 'FINAL', 'may': 'FINAL', 'num': 'FINAL', 'sim': "MUERTE" },
    'FINAL': { 'min': 'FINAL', 'may': 'FINAL', 'num': 'FINAL', 'sim': "MUERTE" },
    'MUERTE': { 'min': 'MUERTE', 'may': 'MUERTE', 'num': 'MUERTE', 'sim': "MUERTE" },
};

const automata = new Automata(estados, estadoFinal, simbolos, transiciones);

boton.addEventListener("click", () => {
    const contraseñaIngresada = document.querySelector("#contraseña").value
    parrafoContraseña.style.display = "block"
    
    if (automata.validacion(contraseñaIngresada)) {
        parrafoContraseña.textContent = contraseñaIngresada + " es una contraseña valida"
    } else {
        parrafoContraseña.textContent = contraseñaIngresada + " no es una contraseña valida"
    }
})


botonContraseña.addEventListener("click", () => {
    if (inputContraseña.type === "password") {
        inputContraseña.type = "text"
        botonContraseña.innerHTML = '<i class="bi bi-eye-fill icono-contraseña"></i>'
    } else {
        inputContraseña.type = "password"
        botonContraseña.innerHTML = '<i class="bi bi-eye-slash icono-contraseña"></i>'
    }
})
