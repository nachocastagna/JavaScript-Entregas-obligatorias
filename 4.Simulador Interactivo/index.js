//CALCULADORA

/* let pregunta = prompt("¿Quieres realizar alguna operacion?");
operaciones = ["sumar", "restar", "multiplicar", "dividir"];

while(pregunta.toLowerCase() == "si"){

    respuesta = prompt("¿Que operacion quieres realizar? --> Sumar - Restar - Dividir - Multiplicar");
    
    if(respuesta.toLowerCase() === operaciones[0]){
        
        alert("Ok, vamos a SUMAR 2 numeros");
        num1 = parseFloat(prompt("Elige el primer numero"))  ;
        num2 = parseFloat(prompt("Elige el segundo numero"));
        resultado = num1 + num2;
        mensaje = (`${num1} + ${num2} = ${resultado}`);
        alert(mensaje);
        break;
    
    }
    else if(respuesta.toLowerCase() == operaciones[1]){
        alert("Ok, vamos a RESTAR 2 numeros");
        num1 = parseFloat(prompt("Elige el primer numero"))  ;
        num2 = parseFloat(prompt("Elige el segundo numero"));
        resultado = num1 - num2;
        mensaje = (`${num1} - ${num2} = ${resultado}`);
        alert(mensaje);
        break;
    }

    else if(respuesta.toLowerCase() == operaciones[2]){
        alert("Ok, vamos a MULTIPLICAR 2 numeros");
        num1 = parseFloat(prompt("Elige el primer numero"))  ;
        num2 = parseFloat(prompt("Elige el segundo numero"));
        resultado = num1 * num2;
        mensaje = (`${num1} * ${num2} = ${resultado}`);
        alert(mensaje);
        break;
    }


    else if(respuesta.toLowerCase() == operaciones[3]){
        alert("Ok, vamos a DIVIDIR 2 numeros");
        num1 = parseFloat(prompt("Elige el primer numero"))  ;
        num2 = parseFloat(prompt("Elige el segundo numero"));
        resultado = num1 / num2;
        mensaje = (`${num1} / ${num2} = ${resultado}`);
        alert(mensaje);
        break;
    }

    else{
        break;
    }
}

alert("Gracias por utilizar nuestra aplicacion"); */


const ahorro = 10
const cuotas12 = 1.35
const cuotas18 = 1.50
const cuotas24 = 1.65


function interes (a,b){
    precioInteres = a*b;
    return `$ ${precioInteres}`
}

function descuento(a,b){
    precioDescuento = a-(a/b);
    return `$ ${precioDescuento}`
}


let precioProducto = prompt("Ingrese el precio del producto: ");

while(precioProducto >=1){
    pregunta = prompt("¿Va a pagar en efectivo o con tarjeta?");
    if(pregunta.toLowerCase() != "tarjeta"){
    alert("Tendra un 10% de descuento. Su precio final es:");
    alert(descuento(precioProducto,ahorro));
    break;
    }


    else if(pregunta.toLowerCase() === "tarjeta"){
    cuotas = parseInt (prompt(`En cuantas cuotas quiere abonar? \n12 --> 35% \n18 --> 50% \n24 --> 65%`))}
    switch(cuotas){
        case 12:
        let precioFinal = parseInt (alert(interes(precioProducto,cuotas12)));
        break;

        case 18:
        precioFinal = parseInt (alert(interes(precioProducto,cuotas18)))
        
        break;

        case 24:
        precioFinal = parseInt (alert(interes(precioProducto,cuotas24)));
        break;

        default:
        alert("Elija correctamente las opciones"); 
        
    }
    
}

alert("Vuelve a cargar la pagina y coloca un monto");
