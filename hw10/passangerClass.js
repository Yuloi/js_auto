import { Airplane} from "./airplane.js";
import { getRandomNumber } from "./func.js";
export class Passanger extends Airplane{
    constructor(name, maxLoadCapacity, maxSeats,flightRange){
        super(name,maxLoadCapacity,flightRange)
        this.maxSeats = maxSeats;
        this.passangersOnboard = 0;
    }
    startFlight(){
        this.isFlighting = true;
        this.passangersOnboard = this.passangersOnboard + getRandomNumber(1, this.maxSeats)
    }
    finishFlight(){
        this.isFlighting = false;
        this.passangersOnboard = 0;
    }
}