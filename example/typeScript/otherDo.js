var mega1 = {
    id: 'Xx',
    lv: 'advenser'
};
var mega2 = {
    id: '7g',
    lv: "intermedia",
    any: {
        one: 1,
        two: 2
    }
};
var mega3 = {
    id: 13,
    lv: "beginer",
    any: ['Hello', 'TypeScript']
};
// console.log(mega1)
// console.log(mega2)
// console.log(mega3)
// type  stadyFoolInfo = {
//     level: string,
//     school: string
// }
// type stadyEnoughInfo = [string]
// function stadyFunc(lv: levels): stadyEnoughInfo
// function stadyFunc(lv: levels, school: string): stadyFoolInfo
// function stadyFunc(lv: levels, school?: string){
//     if(!school){
//         return [lv]
//     }
//     return {
//         level: lv,
//         school: school
//     }
// }
// console.log(stadyFunc('advenser'))
// console.log(stadyFunc('beginer', '#23'))
var StadyFoolInfo = /** @class */ (function () {
    function StadyFoolInfo() {
        this.school = 'Best school';
        this.town = 'Ternopol';
    }
    return StadyFoolInfo;
}());
var StadyEnoughInfo = /** @class */ (function () {
    function StadyEnoughInfo() {
        this.school = 5;
        this.town = 'Lviv';
    }
    return StadyEnoughInfo;
}());
function stadyFunc(lv, stadyInfo) {
    if (stadyInfo instanceof StadyFoolInfo) {
        stadyInfo.lv = lv;
        return JSON.stringify(stadyInfo);
    }
    else {
        stadyInfo.town = 'Kharkov';
        return JSON.stringify(stadyInfo);
    }
}
console.log(stadyFunc('intermedia', new StadyFoolInfo));
console.log(stadyFunc('beginer', new StadyEnoughInfo));
