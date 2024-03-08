let matricula = 7000000
const porcentaje = 0.05
const descuento = (matricula*porcentaje)
matricula -= descuento

const doscuotas = (matricula/2)
const interes1 = (doscuotas+0.02)

const trescuotas = (matricula/3)
const interes2 = (trescuotas+0.02)


let opcionesdepago = parseInt(prompt("Seleccione el tipo de pago:\n1. pago completo ($ descuento) \n2. pago en 2 cuotas \n3. pago en 3 cuotas"));

switch(opcionesdepago){
case(1):
console.log("Ha elegido el pago completo");
console.log(`su descuento es ${descuento} y el valor con el descuento es :${matricula}`);
break;
case(2):
console.log("Ha elegido el pago a dos cuotas")
console.log(`Su pago a dos cuotas mas interes del 2% es igual a :${interes1}`);
break;
case(3):
console.log("Ha elegigo el pago a tres cuotas")
console.log(`Su pago a tres cuotas mas interes del 2% es igual a :${interes2}`)
break;
default:
    console.log("Por favor, seleccione uno de los tres metodos de pago");

}
