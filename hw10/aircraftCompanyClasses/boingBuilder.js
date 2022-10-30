import { AirplaneCraftCompany } from "./aircraftCompanyClass.js";
import { Cargo } from "../airplaneClasses/cargoClass.js";
import { Passanger } from "../airplaneClasses/passangerClass.js";
export class BoengBuilder extends AirplaneCraftCompany{
    name = 'Boeng'
    constructor(){
        super()
    }
    setName(){
        this.name = `${this.name} ${this.airplaneClass}`;
        return this.name;
    }
    build(){
        if (this.type === 'commercial'){
            return new Passanger(this.setName(),this.maxLoadCapacity,this.maxSeats,this.flightRange)
        }else if (this.type === 'cargo'){
            return new Cargo(this.setName(),this.maxLoadCapacity,this.flightRange)
        }
    }
}
