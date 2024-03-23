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

    validacion(contraseña){
        let estadoActual = 'I';

        for (let caracter of contraseña) {

            if (this.letrasMinusculas.includes(caracter)) {
                caracter = 'min'
            } else if (this.letrasMayusculas.includes(caracter)) {
                caracter = 'may'
            } else if (this.numeros.includes(caracter)) {
                caracter = 'num'
            }
            estadoActual = this.transiciones[estadoActual][caracter];
        }

        return this.estadoFinal.includes(estadoActual);
    }
}

const estados = Array.from({ length: 23 }, (_, i) => i);
const estadoFinal = 'FINAL';
const simbolos = ['min', 'may', 'num'];

const boton = document.querySelector("#boton")
const parrafoContraseña = document.querySelector("#parrafo-contraseña")
const inputContraseña = document.querySelector("#contraseña")
const botonContraseña = document.querySelector("#boton-contraseña")

const transiciones = {
    'I': { 'min': 'IV', 'may': 'II', 'num': 'III' },
    'II': { 'min': 'VI', 'may': 'VII', 'num': 'V' },
    'III': { 'min': 'VIII', 'may': 'V', 'num': 'IX' },
    'IV': { 'min': 'X', 'may': 'VI', 'num': 'VIII' },
    'V': { 'min': 'XII', 'may': 'XI', 'num': 'XI' },
    'VI': { 'min': 'XIII', 'may': 'XIII', 'num': 'XII' },
    'VII': { 'min': 'XIII', 'may': 'XIV', 'num': 'XI' },
    'VIII': { 'min': 'XV', 'may': 'XII', 'num': 'XV' },
    'IX': { 'min': 'XV', 'may': 'XI', 'num': 'XVI' },
    'X': { 'min': 'XVII', 'may': 'XIII', 'num': 'XV' },
    'XI': { 'min': 'XXI', 'may': 'XVIII', 'num': 'XVIII'},
    'XII': { 'min': 'XXI', 'may': 'XXI', 'num': 'XXI' },
    'XIII': { 'min': 'XX', 'may': 'XX', 'num': 'XXI' },
    'XIV': { 'min': 'XX', 'may': 'XIV', 'num': 'XVIII' },
    'XV': { 'min': 'XIX', 'may': 'XXI', 'num': 'XIX' },
    'XVI': { 'min': 'XIX', 'may': 'XVIII', 'num': 'XVI' },
    'XVII': { 'min': 'XVII', 'may': 'XX', 'num': 'XIX' },
    'XVIII': { 'min': 'FINAL', 'may': 'XVIII', 'num': 'XVIII' },
    'XIX': { 'min': 'XIX', 'may': 'FINAL', 'num': 'XIX' },
    'XX': { 'min': 'XX', 'may': 'XX', 'num': 'FINAL' },
    'XXI': { 'min': 'FINAL', 'may': 'FINAL', 'num': 'FINAL' },
    'FINAL': { 'min': 'FINAL', 'may': 'FINAL', 'num': 'FINAL' },
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
