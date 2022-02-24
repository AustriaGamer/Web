import Remote from './remote.js'
import Battery from './battery.js'

let r= new Remote(new Battery(), new Battery())

while(r.hasPower()){
    r.turnOn();
    console.log(r.getStatus());
}