import { AirplaneCraftCompany } from "./aircraftCompanyClass.js";
import { Cargo } from "./cargoClass.js";
import { Passanger } from "./passangerClass.js";
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
            return new Passanger(this.setName(),this.maxLoadCapacity,this.maxSeats)
        }else if (this.type === 'cargo'){
            return new Cargo(this.setName(),this.maxLoadCapacity)
        }
    }
}