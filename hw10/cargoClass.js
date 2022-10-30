import { Airplane} from "./airplane.js";
import { getRandomNumber } from "./func.js";
export class Cargo extends Airplane{
    constructor(name, maxLoadCapacity,flightRange){
        super(name,maxLoadCapacity,flightRange)
        this.loadOnboard = 0
    }
    startFlight(){
        this.isFlighting = true;
        this.loadOnboard = this.loadOnboard + getRandomNumber(0, this.maxLoadCapacity)
    }
    finishFlight(){
        this.isFlighting = false;
        this.loadOnboard = 0;
    }
}  