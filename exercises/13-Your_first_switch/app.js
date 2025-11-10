function getColor(selection)	//ESTE TEST PASA EL RESULTADO PERO IMPRIME "ISN'T AVAILABLE"
{
	switch(selection){
		case "red": 			//esto no me quedó claro al inicio pero el caso, 
			return true;		//debe corresponder a "el listado o casos brindados"
		break;					//y cuando no se cumpla la condicion de encontrar
		case "green":			// la palabra en el listado devuelve un false.
			return true;
		break;
		case "blue":
			return true;
		break;
		// Add more options here
	    default:
	    	return false;  //returns false because the user picked an unavailable color
	    break;               
	}
}

let colorname = prompt('What color do you want?').trim().toLowerCase;
let isAvailable = getColor(colorname); //el color name es el input que envia el usuario, para luego
										//buscarse dentro del "switch"
if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');