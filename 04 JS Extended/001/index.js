class Car{
    horsepower = 120;
    constructor(brand, color, country = "Germany"){
        this.brand = brand;
        this.color = color
        this.country = country
    }

    printSpecification() {
        console.log("Car Specification {")
        console.log("   Color: "+ this.color)
        console.log("   Horsepower: "+ this.horsepower)
        console.log("   Brand: "+ this.brand)
        console.log("   Country: "+ this.country)
        console.log("}")
    }
}

let bmw = new Car("BMW","white")
let audi = new Car("Audi","black")
let ferrari = new Car("Ferrari", "red","Italy")
bmw.printSpecification()
audi.printSpecification()
ferrari.printSpecification()