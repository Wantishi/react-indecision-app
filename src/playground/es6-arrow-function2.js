
const add = (a, b) => {
    // console.log(arguments)
    return a + b;
}

console.log(add(55, 1, 1001))


const user = {
    name: 'Jared',
    cities: ['Costa Mesa', 'Los Angeles', 'Irvine'],
    printPlacesLived() {

        return this.cities.map((city) => this.name + ' has lived in ' + city)

    }
}
console.log(user.printPlacesLived())


const multiplier = {
    numbers: [2, 3, 4, 5],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((numb) => numb * this.multiplyBy)
    }
}
console.log(multiplier.multiply());

