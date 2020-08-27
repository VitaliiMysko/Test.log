// ======PROMISE======

function testingFunc(timeout){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), timeout)
    })
}
 
// testingFunc(2000)
// .then(() => fetch('https://jsonplaceholder.typicode.com/todos'))
// .then(result => result.json())
// .then(data => console.log('data', data))
// .catch(err => console.error(err))
// .finally(console.log('finally'))

// ======ASINC AWAIT======

async function testing(timeout){
    try {
        await testingFunc(timeout)
        const result = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await result.json()
        console.log('data', data)    
    } catch (error) {
        console.error(error)
    } finally{console.log('finally')}
    
}

testing(2000)
