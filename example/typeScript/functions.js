function myFunc(planet, planetMoon) {
    if (!planet && !planetMoon) {
        return [undefined];
    }
    if (planet && !planetMoon) {
        return [planet];
    }
    return [planet, planetMoon];
}
// ====================================
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
console.log(myFunc());
console.log(myFunc('Earth'));
console.log(myFunc('Earth', 'moon'));
