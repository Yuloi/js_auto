import { getRandomNumber } from "./func.js";
export class Airplane {
    constructor(name, maxLoadCapacity,flightRange){
        this.name = name;
        this.maxLoadCapacity = maxLoadCapacity;
        this.flightRange = flightRange;
        this.isFlighting = false
        
    };
    startFlight(){
        return this.isFlighting = true;
    }
    finishFlight(){
        return this.isFlighting = false;
    }
}