/*
this programm alows you to create Cargo and Commercial planes from Boeng or Airbus
For creating a plane you need to provide:
mandatory
- setType() -> allowed: 'cargo' or 'commercial' only
- setairplaneClass() -> family number 737, 'A230'
- setmaxLoadCapacity -> number in kilo how much plane can carry
- setflightRange 
optional
- setmaxSeats -> for commercial only

*/
import { BoengBuilder} from "./aircraftCompanyClasses/boingBuilder.js"
import { AirbusBuilder } from "./aircraftCompanyClasses/airbusBuilder.js"
import { Aviacompany } from "./aviacompanyClasses/aviacompanyClass.js"
import { returnMatchedPlainsByParams } from "./func.js"


const boeng737 = new BoengBuilder().setType('cargo').setairplaneClass(737)
.setmaxLoadCapacity(60000).setflightRange(12000)
.build()
const airbusA230 = new AirbusBuilder().setType('commercial').setairplaneClass('A230')
.setmaxLoadCapacity(34000).setmaxSeats(230).setflightRange(10000)
.build()
const boeng777 = new BoengBuilder().setType('commercial').setairplaneClass(777)
.setmaxLoadCapacity(50250).setflightRange(13500).setmaxSeats(300)
.build()
const airbusA350 = new AirbusBuilder().setType('cargo').setairplaneClass('A350')
.setmaxLoadCapacity(45000).setflightRange(10000)
.build()
const boeng747MAX = new BoengBuilder().setType('cargo').setairplaneClass('747MAX')
.setmaxLoadCapacity(67500).setflightRange(15000)
.build()

const klm = new Aviacompany('KLM', 10)
const easyJet = new Aviacompany('EasyJet', 5)

klm.addPlane([boeng737,boeng747MAX,airbusA350])
easyJet.addPlane([airbusA230,boeng777])


// Tasks
console.log(klm.getAllLoadCapacity())
console.log(easyJet.getAllSeatCapacity())

console.log(klm.sortPlanesByFlightRange())

console.log(returnMatchedPlainsByParams(easyJet.listOfPlanes,{maxSeats:230,isFlighting: false}))