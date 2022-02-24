import Battery from "./battery.js";

export default class Remote{
    constructor(Battery1 = Battery, Battery2 = Battery){
        this.battery1 = Battery1;
        this.battery2 = Battery2
    }
    getStatus(){
        let status = ((this.battery1.getPercentage() +this.battery2.getPercentage())/ 200)*100
        return status
    }
    hasPower(){
        if(this.getStatus()> 50){
            return true
        }
        return false
    }
    turnOn(){
        this.battery1.beingUsed(5);
        this.battery2.beingUsed(5);
    }
}
