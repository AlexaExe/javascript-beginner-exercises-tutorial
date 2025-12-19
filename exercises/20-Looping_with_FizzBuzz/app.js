function fizzBuzz() {  
	for (let i=1;i<=100; i++) {
		
	if (i % 3 === 0 && i % 5 === 0)  {
	console.log("FizzBuzz");
		
	} else if (i % 5 === 0){
	console.log("Buzz");
		
	} else if (i % 3 === 0){
	console.log("Fizz");
	
	} else {
	console.log(i);
	}
}

}

fizzBuzz();

// En este código tuve que investigar en goggle como usar
//el simbolo módulo para poder 