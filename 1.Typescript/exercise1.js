var GroupOfPlanet;
(function (GroupOfPlanet) {
    GroupOfPlanet["FirstGroup"] = "Little planet of the Earth's group";
    GroupOfPlanet["SecondGroup"] = "One of the giants in the Solar system";
})(GroupOfPlanet || (GroupOfPlanet = {}));
var PlanetOfSolarSystem = /** @class */ (function () {
    function PlanetOfSolarSystem(diameter, life, nameOfPlanet, distance, groupOfPlanet, satellite) {
        this.diameter = diameter;
        this.life = life;
        this.nameOfPlanet = nameOfPlanet;
        this.distance = distance;
        this.groupOfPlanet = groupOfPlanet;
        this.satellite = satellite;
    }
    PlanetOfSolarSystem.prototype.showDistance = function () {
        console.log("This planet ".concat(this.nameOfPlanet, " is ").concat(this.distance, " km from the Sun."));
        if (this.satellite[0]) {
            console.log("It has ".concat(this.satellite[1], " satellites!"));
        }
        else {
            console.log("It doesn't nave any satellite!");
        }
    };
    Object.defineProperty(PlanetOfSolarSystem.prototype, "Info", {
        get: function () {
            return this.otherInfo;
        },
        set: function (value) {
            this.otherInfo = value || false;
        },
        enumerable: false,
        configurable: true
    });
    return PlanetOfSolarSystem;
}());
var Jupiter = new PlanetOfSolarSystem(1200, false, 'Jupiter', 3500000, GroupOfPlanet.SecondGroup, [true, 20]);
Jupiter.Info = "It is the biggest planet in our Solar system";
function weKnowNewPlanet(arg) {
    console.log("Now we have many info about ".concat(arg, "!"));
    return "Now we have many info about ".concat(arg, "!");
}
weKnowNewPlanet("Jupiter");
console.log(Jupiter.showDistance());
console.log(Jupiter.diameter);
console.log(Jupiter.distance);
console.log(Jupiter.life);
console.log(Jupiter.nameOfPlanet);
console.log(Jupiter.Info);
console.log(Jupiter.groupOfPlanet);
