import { Passanger} from "./passangerClass.js";
import { Cargo } from "./cargoClass.js";
export class airplaneCraftCompanyBuilder {
    name = 'Free'
    constructor(){
    }
    setType(type){
        this.Type = type;
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
    build(){
        return new Cargo(this.setName(),this.maxLoadCapacity)
    }
};