alert ('COTIZACION DEL DIA:\n DOL - $29,90 \n REAL - $50,00 \n EUR - $35,00');

const cotdolar=29;
const  coteur=35;
const  cotrea=50;



let moneda = prompt("QUE MONEDA DESEA?. INGRESE DOL, REA O EUR");
let montoa = parseInt(prompt("INGRESE MONTO A CAMBIAR: "));
//let resultado=0;

function changem(){

       resutado = montoa*const;
        //return resultado;

}

while (moneda != ESC){
    switch (moneda){
        case "DOL":
            changem(montoa,cotdolar);
            alert("USTED A CAMBIADO DOLARES - $" + resultado);
            break;
        case "EUR":
            resultado=changem(montoa,coteur);
            alert("USTED A CAMBIADO EUROS - $" + resultado);
            break;
        case "REA":
            resultado=changem(montoa,cotrea);
            alert("USTED A CAMBIADO REALES - $" + resultado);
            break;
        default:
            alert("MONEDA NO ENCONTRADA");
            break;
    }
        
    
}