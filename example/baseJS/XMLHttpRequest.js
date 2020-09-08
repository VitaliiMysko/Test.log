const url = 'https://jsonplaceholder.typicode.com/users'
 
function sendRequest(method, url, body = null){
    return new Promise((resolve, reject) => {

        const resultRequest = new XMLHttpRequest()

        resultRequest.open(method, url)

        resultRequest.responseType = 'json'
        resultRequest.setRequestHeader('Content-Type', 'application/json')

        resultRequest.onload = () => {
            console.log('onload')

            if(resultRequest.status < 400){
                resolve(resultRequest.response)
            }
            reject(resultRequest.response)
            // console.log(typeof resultRequest.response)
            // console.log(JSON.parse(resultRequest.response))
        }


        resultRequest.addEventListener('error',()=>{
            console.log('error')

            reject(resultRequest.response)
        })

        // resultRequest.addEventListener('readystatechange', () => {
        //     // console.log(resultRequest.getResponseHeader('content-type'))
        //     //console.log(resultRequest.getAllResponseHeaders())
        // })
        
        console.log('one')
        resultRequest.send(JSON.stringify(body))
        console.log('two')

    })
}

// // ==============GET==============

// sendRequest('Get', url)
// .then(response => {
//     response[0].name = 'Vitalii Musko'
//     console.log(response)
// })
// .catch(err => {
//     const er = new Error('Error request on <' + url + '>')
//     er.message = err
//     throw er
// })
// .finally(()=> console.log('finally'))

// ==============POST==============

bodyPost = {
    'name': 'Vitalii Mysko',
    'age': 31
}

//console.log('JSON', JSON.stringify(bodyPost))

sendRequest('Post', url, bodyPost)
.then(response => {
    // response[0].name = 'Vitalii1 Musko1'
    console.log(response)
})
.catch(err => {
    // const er = new Error('Error request on <!!!>')
    // er.message = err
    // throw er
    return console.error(err)
})
.finally(()=> console.log('finally'))
