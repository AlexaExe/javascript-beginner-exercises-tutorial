function getRandomInt()
{
	let randomNumber = Math.floor(Math.random() * 10) + 1 ;
	return randomNumber
}

console.log(getRandomInt());

//la función es getRandomInt, y la variable randomNumber,
// ya teníamos preescrito math.random, nos pide *10,
//luego nos dice que no quiere que devuelva el valor en decimales
//por lo que, por fuera de todo el parámetro, metemos math.floor
// se imprime la función en vacío porque es aleatoria.
// Math.radom(), nunca dara el 1 exacto, por lo que al multiplicarlo *10, 
//lo máximo a lo que puede quedarse es "9", entonces, como nos pide el test enteros 
//entre 1 y 10, debemos asegurar que se cumpla esto sumandole 1, "+1".

//Elior me dio esta fórmula mágica para un día si necesito hacer
// otro ejercicio similar entienda como hacerlo:
//<<<<<Math.floor(Math.radom()* (max - min + 1)) + min;>>>>>>> 