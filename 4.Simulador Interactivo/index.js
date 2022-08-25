//Todo en porncentaje

const ahorro = 10 
const cuotas12 = 1.35
const cuotas18 = 1.50
const cuotas24 = 1.65

//Funciones
function interes (a,b){
    precioInteres = a*b;
    return `${precioInteres}`
}

function descuento(a,b){
    precioDescuento = a-(a/b);
    return `${precioDescuento}`
}

function numcuotas(a,b){
    precioCuotas = a/b;
    return `${precioCuotas}`
}



//Simulador
let precioProducto = parseFloa (prompt("Ingrese el precio del producto: "));

while(precioProducto >0){
    pregunta = prompt("¿Va a pagar en efectivo o con tarjeta?");
 
    if(pregunta.toLowerCase() === "efectivo"){
    alert(`Tendra un 10% de descuento y su precio final seria: ${descuento(precioProducto,ahorro)} `);
    break;
    }

    else if(pregunta.toLowerCase() === "tarjeta"){
    cuotas = parseInt (prompt(`En cuantas cuotas quiere abonar? \n12 --> 35% \n18 --> 50% \n24 --> 65%`));
    switch(cuotas){
        case 12:
        precioFinal = parseInt (alert(interes(precioProducto,cuotas12)));
        mensaje = alert(`${cuotas} cuotas de ${precioFinal}/${cuotas} = ${precioFinal}`)
        break;

        case 18:
        precioFinal = parseInt (alert(interes(precioProducto,cuotas18)))
        mensaje = alert(`${cuotas} cuotas de ${precioFinal}/${cuotas} = ${precioFinal}`)
        break;

        case 24:
        precioFinal = parseInt(alert(interes(precioProducto,cuotas24)));
        montoDeLaCuota = parseInt(alert(`${precioFinal}/${cuotas}`))
        mensaje = alert(`${cuotas} de ${predioDeLaCuota}`);
        break;

        default:
        cuotas = parseInt (prompt(`En cuantas cuotas quiere abonar? \n12 --> 35% \n18 --> 50% \n24 --> 65%`));
        break;}
    }

    else{
        break;}
}

alert("Vuelve a cargar la pagina con F5 y pon el precio del producto");
