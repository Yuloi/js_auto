/*
this programm alows you to create Cargo and Commercial planes from Boeng or Airbus
For creating a plane you need to provide:
mandatory
- setType() -> allowed: 'cargo' or 'commercial' only
- setairplaneClass() -> family number 737, 'A230'
- setmaxLoadCapacity -> number in kilo how much plane can carry
optional
- setmaxSeats -> for commercial only

*/
import { BoengBuilder} from "./aircraftCompanyClasses/boingBuilder.js"
import { AirbusBuilder } from "./aircraftCompanyClasses/airbusBuilder.js"
import { Aviacompany } from "./aviacompanyClasses/aviacompanyClass.js"


const Boeng123 = new BoengBuilder().setType('cargo').setairplaneClass(123).setmaxLoadCapacity(56000).setflightRange(12000)
.build()
const Airbud23 = new AirbusBuilder().setType('commercial').setairplaneClass('A230').setmaxLoadCapacity(34000).setmaxSeats(230).setflightRange(33000)
.build()


