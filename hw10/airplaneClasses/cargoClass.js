import { Airplane} from "./airplaneClass.js";
import { getRandomNumber } from "../func.js";
export class Cargo extends Airplane{
    constructor(name, maxLoadCapacity,flightRange,type){
        super(name,maxLoadCapacity,flightRange,type)
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