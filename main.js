import Elevador from "./elevador.js";

class Main {
    constructor() {
        let elevador = new Elevador(); 
        let btnElevador = document.querySelector("#btnElevador");
        btnElevador.addEventListener('click', () => {
        console.log(elevador.cambiarDePiso());
        console.log("Este lugar cuenta con " + elevador._piso + " pisos");
        });

        let btnPiso = document.querySelector("#btnPiso");
        btnPiso.addEventListener('click', () => {
        console.log(elevador.configurarPisos());
        });
        let btnAbrirPuerta = document.querySelector("#btnAbrirPuerta");
        btnAbrirPuerta.addEventListener('click', () => {
        console.log(elevador.abrirPuerta());
        });

        let btnCerrarPuerta = document.querySelector("#btnCerrarPuerta");
        btnCerrarPuerta.addEventListener('click', () => {
        console.log(elevador.cerrarPuerta());
        });
    }
}
let m = new Main();