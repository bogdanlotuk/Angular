interface DistanseFromTheSun {
    distance: number;
    showDistance(): void;
}

interface Planet extends DistanseFromTheSun {
    diameter: number;
    life: boolean;
    nameOfPlanet: string;
}

type PlanetName = "Mercury" | "Venus" | "Earth" | "Mars" | "Jupiter" | "Saturn" | "Uranus" | "Neptune";

class PlanetOfSolarSystem implements Planet{
    public diameter: number;
    readonly life: boolean;
    nameOfPlanet: PlanetName;
    distance: number;
    private otherInfo: any; 
    
    constructor(diameter: number, life: boolean, nameOfPlanet: PlanetName, distance: number ){
        this.diameter = diameter;
        this.life = life;
        this.nameOfPlanet = nameOfPlanet;
        this.distance = distance;
    }
    showDistance(): void {
        console.log(`This planet ${this.nameOfPlanet} is ${this.distance} km from the Sun`);
    }

    get Info() {
        return this.otherInfo;
    }
    
    set Info(value: string | number | boolean) {
        this.otherInfo = value || false;
    }
}

let Jupiter = new PlanetOfSolarSystem(1200, false, 'Jupiter', 3500000);
Jupiter.Info = "It is the biggest planet in our Solar system";

console.log(Jupiter.showDistance());
console.log(Jupiter.diameter);
console.log(Jupiter.distance);
console.log(Jupiter.life);
console.log(Jupiter.nameOfPlanet);
console.log(Jupiter.Info)

