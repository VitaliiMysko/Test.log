const url = 'https://jsonplaceholder.typicode.com/use3rs'

function sendRequest(method, url, body = null){
 
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: {'content-type': 'application/json'}
    })
    .then(result => {
        
        // if(result.status < 400){
        //     return result.json()
        // }

        if (result.ok){
            return result.json()
        }
    
        const err = new Error('Trabl, sad...')
        err.name = 'Opssss'
        throw err

    })
}

// sendRequest('Get', url)
// .then(response => {
//     console.log('then')
//     // console.log(JSON.parse(response))
//     console.log(response)
// })
// .catch(err => {
//     console.log('catch')
//     console.error(err)
// })
// .finally(() => {
//     console.log('finally')
// })

const postBody = {
    'name': 'Vitalii',
    'age': 31
}

sendRequest('Post', url, postBody)
.then(response => {
    console.log('then')
    console.log(response)
})
.catch(err => {
    console.log('catch')
    console.error(err)
})
.finally(() => {
    console.log('finally')
})