export class Aviacompany {
    constructor(name, maxAirplanes){
        this.name = name;
        this.maxAirplanes = maxAirplanes;
        this.listOfPlanes = []
    }
    addPlane(a =[]){
        for(let i = 0; i < a.length; i++){
        this.listOfPlanes.push(a[i])
        }
    }
    removePlane(a =[]){
        for(let i = 0; i < a.length; i++){
            this.listOfPlanes.pop(a[i])
            }
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
    filterPlanesByParam(sortingParam, value){
        switch(sortingParam){
            case 'name':
                let res = this.listOfPlanes.filter((plane) => plane.name.toLowerCase().includes(value.toLowerCase()));
                return res
            break;
        }
    }
}