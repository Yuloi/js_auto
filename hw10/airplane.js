export class Airplane {
    #isFlighting = false
    constructor(name, maxLoadCapacity){
        this.name = name;
        this.maxLoadCapacity = maxLoadCapacity;
    };
    startFlight(){
        return this.#isFlighting = true
    }
}