var PlanetOfSolarSystem = /** @class */ (function () {
    function PlanetOfSolarSystem(diameter, life, nameOfPlanet, distance) {
        this.diameter = diameter;
        this.life = life;
        this.nameOfPlanet = nameOfPlanet;
        this.distance = distance;
    }
    PlanetOfSolarSystem.prototype.showDistance = function () {
        console.log("This planet ".concat(this.nameOfPlanet, " is ").concat(this.distance, " km from the Sun"));
    };
    return PlanetOfSolarSystem;
}());
var Jupiter = new PlanetOfSolarSystem(1200, false, 'Jupiter', 3500000);
console.log(Jupiter.showDistance());
console.log(Jupiter.diameter);
//console.log(Jupiter.distance);
console.log(Jupiter.life);
//console.log(Jupiter.nameOfPlanet);
