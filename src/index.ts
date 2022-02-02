let ingresoproductonuevos1: string = String(
  prompt("ingreso de  producto nuevo 1")
);
let stockinicialdelosproductosnuevos1: number = Number(
  prompt("Ingresa stock inicial ")
);
let preciodelosproductosnuevos1: number = Number(prompt("ingresa el precio "));

let productonuevo1: string = "";
let stocknuevoproducto1: number = 0;
let precioproductonuevo1: number = 0;

if (stockinicialdelosproductosnuevos1 > 0 && preciodelosproductosnuevos1 > 0) {
  productonuevo1 = ingresoproductonuevos1;
  stocknuevoproducto1 = stockinicialdelosproductosnuevos1;
  precioproductonuevo1 = preciodelosproductosnuevos1;
}
console.log(
  `El primer producto agregado es: ${productonuevo1} $ ${precioproductonuevo1} con su stock inicial de ${stocknuevoproducto1}`
);

let ingresoproductonuevos2: string = String(
  prompt("ingreso de  producto nuevo 2")
);
let stockinicialdelosproductosnuevos2: number = Number(
  prompt("Ingresa stock inicial ")
);
let preciodelosproductosnuevos2: number = Number(prompt("ingresa el precio "));

let productonuevo2: string = "";
let stocknuevoproducto2: number = 0;
let precioproductonuevo2: number = 0;

if (stockinicialdelosproductosnuevos2 > 0 && preciodelosproductosnuevos2 > 0) {
  productonuevo2 = ingresoproductonuevos2;
  stocknuevoproducto2 = stockinicialdelosproductosnuevos2;
  precioproductonuevo2 = preciodelosproductosnuevos2;
}
console.log(
  `El  segundo producto agregado es: ${productonuevo2} $ ${precioproductonuevo2} con su stock inicial de ${stocknuevoproducto2}`
);

let ingresoproductonuevos3: string = String(
  prompt("ingreso de  producto nuevo 3")
);
let stockinicialdelosproductosnuevos3: number = Number(
  prompt("Ingresa stock inicial ")
);
let preciodelosproductosnuevos3: number = Number(prompt("ingresa el precio "));

let productonuevo3: string = "";
let stocknuevoproducto3: number = 0;
let precioproductonuevo3: number = 0;

if (stockinicialdelosproductosnuevos3 > 0 && preciodelosproductosnuevos3 > 0) {
  productonuevo3 = ingresoproductonuevos3;
  stocknuevoproducto3 = stockinicialdelosproductosnuevos3;
  precioproductonuevo3 = preciodelosproductosnuevos3;
}
console.log(
  `El tercer producto agregado es: ${productonuevo3} $ ${precioproductonuevo3} con su stock inicial  de ${stocknuevoproducto3}`
);

console.log("Bienvenidos a Mercado 5");
console.log(
  `Los productos disponibles son ${productonuevo1}$  ${precioproductonuevo1} hay en stock ${stocknuevoproducto1}`
);
console.log(
  `Los productos disponibles son ${productonuevo2}$  ${precioproductonuevo2} hay en stock ${stocknuevoproducto2}`
);
console.log(
  `Los productos disponibles son ${productonuevo3}$  ${precioproductonuevo3} hay en stock ${stocknuevoproducto3}`
);

let compra:number=Number(
  prompt("Ingrese la cantidad de productos que va a comprar")
);

while (compra <= 0) {
  compra=Number(prompt(
    "Ingrese la cantidad de productos que va a comprar que sea mayor a 0"
  ));
}
for (let index = 0; index < compra; index++) {
  let compradeunproducto: string = String(prompt("Que producto desea comprar"));
let cantidadacomprar: number = Number(prompt("Cuantos desea comprar"));

let compradeproducto: string = "";
let cantidaddecompradeproducto: number = 0;
let totaldecompra: number = 0;
let stockdisponible: number = 0;
if (
  compradeunproducto === productonuevo1 &&
  cantidadacomprar <= stocknuevoproducto1
) {
  compradeproducto = compradeunproducto;
  cantidaddecompradeproducto = cantidadacomprar;
  totaldecompra = precioproductonuevo1 * cantidaddecompradeproducto;
  stockdisponible = stocknuevoproducto1 - cantidaddecompradeproducto;
  console.log(
    `La compra que realizaste: ${compradeproducto} $ ${precioproductonuevo1}, la cantidad que compraste ${cantidaddecompradeproducto}, total a pagar ${totaldecompra} y el stock disponible es: ${stockdisponible}`
  );
} else if (
  compradeunproducto === productonuevo2 &&
  cantidadacomprar <= stocknuevoproducto2
) {
  compradeproducto = compradeunproducto;
  cantidaddecompradeproducto = cantidadacomprar;
  totaldecompra = precioproductonuevo2 * cantidaddecompradeproducto;
  stockdisponible = stocknuevoproducto2 - cantidaddecompradeproducto;
  console.log(
    `La compra que realizaste: ${compradeproducto} $ ${precioproductonuevo2}, la cantidad que compraste ${cantidaddecompradeproducto}, total a pagar ${totaldecompra} y el stock disponible es: ${stockdisponible}`
  );
} else if (
  compradeunproducto === productonuevo3 &&
  cantidadacomprar <= stocknuevoproducto3
) {
  compradeproducto = compradeunproducto;
  cantidaddecompradeproducto = cantidadacomprar;
  totaldecompra = precioproductonuevo3 * cantidaddecompradeproducto;
  stockdisponible = stocknuevoproducto3 - cantidaddecompradeproducto;
  console.log(
    `La compra que realizaste: ${compradeproducto} $ ${precioproductonuevo2}, la cantidad que compraste ${cantidaddecompradeproducto}, total a pagar ${totaldecompra} y el stock disponible es: ${stockdisponible}`
  );
} else {
  console.log("No hay stock del producto que desea comprar;");
}
  
}

