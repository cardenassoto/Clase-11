// Con el condicional IF simularás una heladería.

// Tendrás cuatro variables. Las variables topping, precio y precioFinal que no tendrán un valor asignado por el momento y tendrás la variable helado, que le asignarás el valor numérico
//Si el topping es Oreo, el precio será de $10.
//Si el topping es KitKat, el precio será de $15.
/*Si el topping es Kinder, el precio será de $25.
Si el topping no es ninguno de los anteriores, poné un mensaje que diga “No tenemos este topping”.
A la variable precioFinal, la actualizaremos al final con la suma del precio del helado más el precio
del topping y tendrá un mensaje diciendo “"El helado cuesta $" + precioFinal”*/

/*{
    let helado = ["10", "15", "25"];
    let topping = ["Oreo", "KitKat", "Kinder"]
    if (topping = "Oreo") {
        console.log("El precio sera de $ 10");
    } else if (topping = "KitKat") {
        console.log("El precio sera de $ 15");
    } else if (topping = "Kinder") {
        console.log("El precio sera de $ 25");
    } else (topping)=> {
    console.log("No tenemos este topping"); }
}*/

{
    let helado = 10;
    let topping;
    let precio;
    let precioFinal;

    topping = "Oreo"

    if (topping === "Oreo") {
        precio = 10;
        console.log("El precio sera de $ 10");

    } else if (topping === "KitKat") {
        precio = 15;
        console.log("El precio sera de $ 15");

    } else if (topping = "Kinder") {
        precio = 25;
        console.log("El precio sera de $ 25");

    } else {
        console.log("No tenemos este topping");
    }
    precioFinal = helado + precio;
console.log("El helado cuesta $" + precioFinal);
}






// Con el condicional SWITCH simularás un pedido.
    let pedido = "cliente"
   
    switch (Pedido) { 
    case "Carne":
    console.log("se ofrece vino tinto")
    break;

    case "Pescado":
    console.log("se ofrece vino blanco")
    break;

    case "verdura":
    console.log("se ofrece vino agua")
    break;

    case "Nada":
    console.log("elija carne, pescado o verdura")
    break;

    }

    let variableDespuesdeSwitche = true;


// Variable que contenga un array de datos, y con el ciclo FOR

let sitiosrecorridos = ["El Tigre", "Valencia", "El Tigre", "San Martin", "villa crespo", "la plata", "San Nicolas"]

let i;

for (i = 0; i <= sitiosrecorridos.length; i++) {
    // acciones a realizar
    // valor de i = 0

    console.log(sitiosrecorridos[i]);
}


/*Con WHILE lo que harás será que, mientras el número sea menor que 11, dirá la frase
“numero es más chico que 11”, siendo “numero” el valor de tu variable. Recordá hacer incremental
la variable para que no quede en un bucle infinito.*/

let listadenumeros=[];
let bandera = true;
let vueltas = 0;

while(bandera) {
    let numero = prompt("ingresa 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 para terminar");
    if(numero == "0"){
        bandera = false
    } else {
        listadenumeros
    }
}
console.log(listaNodenumeros)



