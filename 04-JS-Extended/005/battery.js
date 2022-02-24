export default class Battery{
    percentage = 100

    beingUsed(usage = Intl){
        this.percentage = this.percentage - usage
    }
    getPercentage(){
        return this.percentage
    }
}
