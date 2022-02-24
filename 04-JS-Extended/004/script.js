import car from '../002/car.js'

export default class Supercar extends car{
    horsepower = 200
}
let c = new Supercar("Ferrari","red","Italy")
c.printSpecification()