import { Airplane} from "./airplane.js";
export class Passanger extends Airplane{
    constructor(name, maxLoadCapacity, maxSeats){
        super(name,maxLoadCapacity)
        this.maxSeats = maxSeats;
    }
}
