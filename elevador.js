export default class Elevador {
    constructor() {
        this._piso = 10;
        this._pisoActual = 1;
        this._lugarPiso = false;
    }

    get piso() {
        return this._piso;
    }

    get pisoActual() {
        return this._pisoActual;
    }

    cambiarDePiso() {    
        let piso = prompt("Ingrese el piso al que desea ir");
        
        if(piso < 1 || piso > this._piso) {
            alert("El piso al que quiere ir no existe");
        }
        else if(piso == this._pisoActual) {
            alert("Usted ya se encuentra en el piso" + this._piso);
        }
        else if(piso != this._pisoActual) {
            console.log("Subiendo al piso " + piso);
            this._pisoActual = piso;
        }
        return "Usted ha llegado al piso " + this._pisoActual; 
    }

    configurarPisos() {
        let totalDePisos = prompt("¿Cuantos pisos hay?")
        this._piso = totalDePisos;
        console.log("El lugar cuenta con " + this._piso + " pisos");
    }

    abrirPuerta() {
        if(this._lugarPiso == true) {
            console.log("La puerta ya ha sido abierta");
        }
        else {
            console.log("La puerta ha sido abierta");
            this._lugarPiso = true;
        }
        return this._lugarPiso;
    }

    cerrarPuerta() {
        if(this._lugarPiso == false) {
            console.log("La puerta ya ha sido cerrada");
        }
        else {
            console.log("La puerta ha sido cerrada");
            this._lugarPiso = false;
        }
        return this._lugarPiso;
    }
}