// firePosition will be the position in which the gun will fire.
let firePosition = 1;

// The output of spinChamber will be a number and it can be passed as a parameter to the fireGun function.
const spinChamber = () => {
    let chamberPosition = Math.floor((Math.random() * 6) + 1);
    return chamberPosition;
};

// Remove the // below and complete the commented lines
const fireGun = (chamberPosition) => {
    if (chamberPosition === firePosition) {
    return ("You're dead!");    
    } else {
        return("Keep playing!")};
};

const chamber = spinChamber();
console.log("chamber position:", chamber);
console.log(fireGun(chamber)); //aquí separé la posición de chamber... 
// porque no sabia que posición cogía y lo que estaba comparando ... por ello, 
//miramos que posición coge, se imprime y luego hacemos el giro con la ruleta...


