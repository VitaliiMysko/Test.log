
// =======================with type=======================

type planetEmpty = [undefined]
type planetWithoutMoon = [string]
type planetWithMoon = [string, string]

// function myF (a?: string | number): planetEmpty {
//     const res = !a ? undefined : '' + a
//     return [res]
// }

// console.log(myF('Hello'))
// console.log(myF(13))
// console.log(myF())

function myFunc (): planetEmpty
function myFunc (planet: string): planetWithoutMoon
function myFunc (planet: string, moonPlanet: string): planetWithMoon

function myFunc(planet?: string, planetMoon?: string){
    if(!planet && !planetMoon){
        return [undefined]
    }

    if(planet && !planetMoon){
        return [planet]
    }

    return [planet, planetMoon]
    
}





// =======================with interface=======================

// interface PlanetEmpty {
//     planet: undefined,
//     planetMoon: undefined
// }
// interface PlanetWithoutMoon {
//     planet: string,
//     planetMoon: undefined
// }
// interface PlanetWithMoon {
//     planet: string,
//     planetMoon: string
// }

// function myFunc (): PlanetEmpty
// function myFunc (planet: string): PlanetWithoutMoon
// function myFunc (planet: string, planetMoon: string): PlanetWithMoon


// function myFunc(planet?: string, planetMoon?: string){

//     if(!planet && !planetMoon){
//         return {
//             planet: undefined,
//             planetMoon: undefined
//         }
//     }

//     if(planet && !planetMoon){
//         return {
//             planet: planet,
//             planetMoon: undefined
//         }
//     }

//     return {
//         planet: planet,
//         planetMoon: planetMoon
//     }

// }



console.log(myFunc())
console.log(myFunc('Earth'))
console.log(myFunc('Earth', 'moon'))