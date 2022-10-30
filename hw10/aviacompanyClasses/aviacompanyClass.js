export class Aviacompany {
    constructor(name, maxAirplanes){
        this.name = name;
        this.maxAirplanes = maxAirplanes;
        this.listOfPlanes = []
    }
    addPlane(plane){
        this.listOfPlanes.push(plane)
    }
    removePlane(plane){
        this.listOfPlanes.pop(plane)
    }
    getAllLoadCapacity(){
        let res = 0;
        for(let i = 0; i < this.listOfPlanes.length; i++){
            res += this.listOfPlanes[i].maxLoadCapacity
        }
        return `max load for all planes is ${res} kg`
    }
    getAllSeatCapacity(){
        let res = 0;
        for(let i = 0; i < this.listOfPlanes.length; i++){
            if (this.listOfPlanes[i].maxSeats === undefined){
                res += 0
            }else{
                res += this.listOfPlanes[i].maxSeats
            }
        }
        return res
    }
    sortPlanesByFlightRange(){
        return this.listOfPlanes.sort((a,b) =>
        b.flightRange - a.flightRange
        )
    }
}