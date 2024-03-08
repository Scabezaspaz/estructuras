const PRECIO_BASICO = 2000;
const PRECIO_PREMIUM = 4000;

const OPCION_BASICO = 1
const OPCION_PREMIUM = 2

let costoUnitario
let piezas;

let opcionSeleccionada = parseInt(prompt("Seleccione el tipo de servicio: \n1. Basico ($2000 c/u) \n2. Premium($4000 c/u)"));

if(opcionSeleccionada === OPCION_BASICO) {
    costoUnitario = PRECIO_BASICO;
    piezas = parseInt(prompt("Ingrese cantidad de piezas (1-20):"));
} else if(opcionSeleccionada === OPCION_PREMIUM) {
    costoUnitario = PRECIO_PREMIUM;
    piezas = parseInt(prompt("Ingrese cantidad de piezas (1-20):"));
    alert(piezas)
} else {
    console.log("Opcion Invalida");
}

if(piezas < 1 || piezas > 20) {
    console.log("Cantidad de piezas invalida");
}else{

    console.log("Costo total: $" + (costoUnitario * piezas));
}

