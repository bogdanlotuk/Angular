enum GroupOfPlanet {
    FirstGroup = "Little planet of the Earth's group",
    SecondGroup = "One of the giants in the Solar system",
}

type PlanetName = "Mercury" | "Venus" | "Earth" | "Mars" | "Jupiter" | "Saturn" | "Uranus" | "Neptune";

type PlanetSatellite = [boolean, number];
interface DistanseFromTheSun {
    distance: number;
    groupOfPlanet: GroupOfPlanet;
    showDistance(): void;
}

interface Planet extends DistanseFromTheSun {
    diameter: number;
    life: boolean;
    nameOfPlanet: string;
}

class PlanetOfSolarSystem implements Planet{
    public diameter: number;
    readonly life: boolean;
    nameOfPlanet: PlanetName;
    distance: number;
    groupOfPlanet: GroupOfPlanet;
    satellite: PlanetSatellite;
    private otherInfo: any; 
    
    constructor(diameter: number, life: boolean, nameOfPlanet: PlanetName, distance: number, groupOfPlanet: GroupOfPlanet, satellite: PlanetSatellite ){
        this.diameter = diameter;
        this.life = life;
        this.nameOfPlanet = nameOfPlanet;
        this.distance = distance;
        this.groupOfPlanet = groupOfPlanet;
        this.satellite = satellite;
    }
    showDistance(): void {
        console.log(`This planet ${this.nameOfPlanet} is ${this.distance} km from the Sun.`);
        if(this.satellite[0]){
            console.log(`It has ${this.satellite[1]} satellites!`)
        } else {
            console.log(`It doesn't nave any satellite!`)
        }
    }

    get Info() {
        return this.otherInfo;
    }
    
    set Info(value: string | number | boolean) {
        this.otherInfo = value || false;
    }
}

let Jupiter = new PlanetOfSolarSystem(1200, false, 'Jupiter', 3500000, GroupOfPlanet.SecondGroup, [true, 20]);
Jupiter.Info = "It is the biggest planet in our Solar system";

function weKnowNewPlatet<T>(arg: T){
    console.log(`Now we have many info about ${arg}!`);
    return `Now we have many info about ${arg}!`;
}

weKnowNewPlatet("Jupiter");

console.log(Jupiter.showDistance());
console.log(Jupiter.diameter);
console.log(Jupiter.distance);
console.log(Jupiter.life);
console.log(Jupiter.nameOfPlanet);
console.log(Jupiter.Info)
console.log(Jupiter.groupOfPlanet)




