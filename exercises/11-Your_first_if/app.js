let total = prompt('How many km are left to go?');

// Your code below:
function drivingMessage(total){
if (total>100){
return "We still have a bit of driving left to go";
} else if (total>50 && total<=100){
    return "We'll be there in 5 minutes";
} else { 
    return "I'm parking. I'll see you right now";
}
}

console.log(drivingMessage(Number(total)));

//me demoré alrededor de 40 minutos en este ejercicio porque 
// no sabía como funciona la logica en Javascript de los "if"
//entonces, como yo vengo con lógica de python me cuesta un poco
//adaptarme a la sintaxis de js, por lo que, me demoré un monton
//descifrando como colocar las condicionales, y no daba el test :'( 
// por un mínimo espacioooooo...
//en fin, cosas de programadores...