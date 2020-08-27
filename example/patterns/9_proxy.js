function viewUrl(url){
    return `${url} - from server`
}

const cashe = new Set()

const proxed = new Proxy(viewUrl,{
    apply(target, thisArg, args){

        const url = args[0]

        if(cashe.has(url)){
            return `${url} - from cash`
        }else{
            cashe.add(url)
            return Reflect.apply(target,thisArg, args)
        }

    }
})

console.log(proxed('google.com'))
console.log(proxed('facebook.com'))
console.log(proxed('google.com'))