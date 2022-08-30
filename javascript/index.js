//CALCULAR INTERESES DEL PRECIO DE UN PRODUCTO

//Todo en porncentaje
const ahorro = 20 
const cuotas12 = 1.21
const cuotas18 = 1.32
const cuotas24 = 1.65

//Funciones
function interes (a,b){
    precioInteres = a*b;
    return `${precioInteres}`
}

function descuento(a,b){
    precioDescuento = a-(a*b/100);
    return `${precioDescuento}`
}

numcuotas = (a,b) => a/b /*{
    precioCuotas = a/b;
    return `${precioCuotas}`
} */

//Simulador
let precioProducto = parseInt (prompt("Ingrese el precio del producto: "));
let pregunta = prompt("¿Va a pagar en efectivo o con tarjeta?");

  
    if(pregunta.toLowerCase() === "efectivo"){
    alert(`Tendra un ${ahorro}% de descuento y su precio final seria: $${descuento(precioProducto,ahorro)} `);
    }

    else if(pregunta.toLowerCase() === "tarjeta"){
    cuotas = parseInt (prompt(`En cuantas cuotas quiere abonar? \n12 --> ${(cuotas12*100)-100}% \n18 --> ${(cuotas18*100)-100}%  \n24 --> ${(cuotas24*100)-100}%` ));
    switch(cuotas){
        case 12:
        precioFinal = parseInt((`${interes(precioProducto,cuotas12)}`));
        mensaje = alert(`${cuotas} cuotas de $${numcuotas(precioFinal,cuotas)} = $${precioFinal}`);
        break;

        case 18:
        precioFinal = parseInt((`${interes(precioProducto,cuotas18)}`));
        mensaje = alert(`${cuotas} cuotas de $${numcuotas(precioFinal,cuotas)} = $${precioFinal}`);
        break;

        case 24:
        precioFinal = parseInt((`${interes(precioProducto,cuotas24)}`));
        mensaje = alert(`${cuotas} cuotas de $${numcuotas(precioFinal,cuotas)} = $${precioFinal}`);
        break;

        default:
        cuotas = parseInt (prompt(`En cuantas cuotas quiere abonar? \n12 --> ${(cuotas12*100)-100}% \n18 --> ${(cuotas18*100)-100}%  \n24 --> ${(cuotas24*100)-100}%` ));
        break;}
    }


alert("Vuelve a cargar la pagina con F5 y pon el precio del producto");


// CUALES SON LOS MULTIPLOS DE "UN NUMERO"?

/* let numero = parseFloat(prompt("¿Cuales son los multiplos de (INGRESE NUMERO)?"));

let mcm = parseFloat(prompt("Hasta que valor desea saber su multiplo?"));

if(numero < mcm){

for(let i = 1; i <= 50; i++){
  
    let resultado = numero * i;
    let mensaje = `El multiplo de ${numero} * ${i} es ${resultado}`;
    if(resultado == mcm){
        
    }
    else if(resultado > mcm){
        alert("Hasta aqui llegamos")
        break
    }
    alert(mensaje);
    }
}
else{
    alert("El numero del cual esta interesado no puede ser mayor a su multiplo")
}  */