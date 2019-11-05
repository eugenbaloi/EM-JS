
// 45 si 82 //


console.log(45 * 82);

// Din fisierul utils.js afiseaza in consola patratul sumei numerelor 13 si 41. a2  + 2ab + b2 //

console.log(Math.pow(13, 2) + 2 * 13 * 41 + Math.pow (41, 2));

//  Din fisierul utils.js afiseaza in consola suprafata unui cerc cu diametrul de 15
// 

console.log(Math.)

function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));