import { Passanger} from "./passangerClass.js";
import { Cargo } from "./cargoClass.js";
export class AirplaneCraftCompany {
    constructor(){
    }
    setType(type){ //Commercial or Cargo
        this.type = type;
        return this;
    };
    setairplaneClass(number){
        this.airplaneClass = number;
        return this;
    }
    setmaxLoadCapacity(number){
        this.maxLoadCapacity = number
        return this;
    };
    setmaxSeats(number){
        this.maxSeats = number;
        return this
    };
    setName(){
        this.name = `${this.name} ${this.airplaneClass}`;
        return this.name;
    }
    setflightRange(number){
        this.flightRange = number
        return this;
    }
};