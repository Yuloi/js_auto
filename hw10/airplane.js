class Airplane {
    constructor(name, weight, rangeFlight, maxLoadCapacity){
        this.name = name;
        this.weight = weight;
        this.rangeFlight = rangeFlight;
        this.maxLoadCapacity = maxLoadCapacity;

    };

}
class Cargo extends Airplane {
    constructor(name, weight, rangeFlight, maxLoadCapacity){
        super(name, weight, rangeFlight, maxLoadCapacity) 
    }

}
class Commercial extends Airplane {
    constructor(name, weight, rangeFlight, maxLoadCapacity,maxSeats){
        super(name, weight, rangeFlight, maxLoadCapacity)
        this.maxSeats = maxSeats;
    }
}

