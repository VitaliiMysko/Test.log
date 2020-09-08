const drink = 'beer'
const food = 'meet'


console.log(localStorage.getItem('drink'))
localStorage.setItem('drink', drink)
localStorage.setItem('food', food)
console.log(localStorage.getItem('food'))
// localStorage.removeItem('drink')
localStorage.clear()


const person = {
    'isHead': true,
    'isTail': false,
    'likeRest': false,
    'madeOf': 'meet',
    'travel': {'nameCountry': 'Italia', 'times': 2, 'likeCountry': false}
}

localStorage.setItem('person', JSON.stringify(person))
console.log(localStorage.getItem('person'))
console.log(JSON.parse(localStorage.getItem('person')))

window.addEventListener('storage', event => {
    console.log('storage')    
    console.log(event)
})



