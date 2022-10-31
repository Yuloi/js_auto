export class Airplane {
    constructor(name, maxLoadCapacity,flightRange, type){
        this.name = name;
        this.maxLoadCapacity = maxLoadCapacity;
        this.flightRange = flightRange;
        this.isFlighting = false
        this.type = type;
        
    };
    startFlight(){
        return this.isFlighting = true;
    }
    finishFlight(){
        return this.isFlighting = false;
    }
}