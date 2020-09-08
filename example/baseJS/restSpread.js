//SPRED - "розвертає" масиви та обєкти
//REST - "згортає" дані в масиви та обєкти


const namesMan = ['Vitalii', 'Petro', 'Olexander', 'Ostap']
const namesWoman = ['Tanja', 'Mariana', 'Oxana', 'Natalja']

const manAge = {
    'vitalii': 31,
    'petro': 30,
    'olexander': 55,
    'ostap':10 
}

const womanAge = {
    'tanja': 31,
    'mariana': 30,
    'oxana': 55,
    'natalja':10 
}

const copyNamesMan = [...namesMan]
const copyNamesWoman = [...namesWoman]

const copyManAge = {...manAge}
const copyWomanAge = {...womanAge}

const ollNames = [...namesMan, ...namesWoman]

const ollNameAge = {...manAge, ...womanAge}

copyNamesMan.push('Maxim')
const ollNamesMan = [...namesMan, ...copyNamesMan]

copyManAge.Maxim = 18
const ollManAge = {...manAge, ...copyManAge}

console.log(ollNames)
console.log(ollNamesMan)

console.log(ollNameAge)
console.log(ollManAge)

//Rest
function devideName(a, b, ...names){
    console.log('param "...names" is REST')
    console.log(names)
    return a.toUpperCase() + ' ... ' + b.toUpperCase()
    // return a + ' ... ' + b
}

console.log(devideName(...copyNamesMan))



const person = {
    'isHead': true,
    'isTail': false,
    'likeRest': false,
    'madeOf': 'meet',
    'travel': {'nameCountry': 'Italia', 'times': 2, 'likeCountry': false}
}

// const {madeOf, isHead, isTail, ...otherSkillPerson} = person
//const {isHead, madeOf, isTail, ...otherSkillPerson} = person
// const {isTail, madeOf, isHead, ...otherSkillPerson} = person
// const {isTail, isHead, madeOf, ...otherSkillPerson} = person
const {isTail, isHead, ...otherSkillPerson} = person
// const {isHead, isTail, ...otherSkillPerson} = person
//const {a, b, ...otherSkillPerson} = person

console.log('param "...otherSkillPerson" is REST')

console.log(isHead)
console.log(isTail)
// console.log(madeOf)
console.log(otherSkillPerson)

// console.log(a)
// console.log(b)
// console.log(otherSkillPerson)



//Dectructuring

const {isTail : Tail = false, isHead : Head = true, travel : {nameCountry = 'None', times : timeCountry = 0}, ...restSkillPerson} = person
console.log(nameCountry)
console.log(timeCountry)

const [mrVitalii, mrPetro, father, ...restNameMan] = namesMan
console.log(mrVitalii)
console.log(mrPetro)
console.log(father)
console.log(restNameMan)
