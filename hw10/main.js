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
import { BoengBuilder } from "./boingBuilder.js";
import { AirbusBuilder } from "./airbusBuilder.js";



const Boeng123 = new BoengBuilder().setType('cargo').setairplaneClass(123).setmaxSeats(234).setmaxLoadCapacity(4646464).build()
const Airbud23 = new AirbusBuilder().setType('commercial').setairplaneClass('A230').setmaxLoadCapacity(340000).setmaxSeats(230).build()
Boeng123.startFlight()
console.log(Boeng123)

