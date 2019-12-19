let car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  topSpeed: 160,
  topReverseSpeed: -50,

  isTrunkOpen: false,
  openTrunk: function() {
    this.isTrunkOpen = true;
  },
  closeTrunk: function() {
    this.isTrunkOpen = false;
  },
  areLightsOn: false,
  turnLightsOn: function() {
    this.areLightsOn = true;
  },
  turnLightsOff: function() {
    this.areLightsOn = false;
  },
  flashLights: function() {
    this.turnLightsOff();
    this.turnLightsOn();
    setTimeout(() => {
      this.turnLightsOff();
    }, 800);
  },
  
  accelerate: function() {
    this.speed++;
  },
  decelerate: function() {
    this.speed--;
  },
  stopCar: function(){ 
    this.speed = 0;
  },
  setSpeed: function(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
      return;
    };
    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
      return;
  };

this.speed = speed;
  }
};


console.log(`Masina era marca ${car.make} si mergea cu viteza ${car.speed} kph.`);
car.decelerate();
car.decelerate();
car.decelerate();
car.decelerate();
car.decelerate();
console.log(`Viteza noua este ${car.speed}kph.`);
car.stopCar();
console.log(`${car.speed}kph.`);

