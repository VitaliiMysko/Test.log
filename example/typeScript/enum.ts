enum listFrutscolor {
    green = 'lime',
    yellow = 'lemon',
    red = 'chery' 
}

const greenFrut = listFrutscolor.green
const yellowFrut = listFrutscolor.yellow

console.log(greenFrut, yellowFrut)
console.log(listFrutscolor['red'])


enum similarArr {
    bike,
    scooter,
    car
}

console.log(similarArr.bike, similarArr.scooter)
console.log(similarArr[2])