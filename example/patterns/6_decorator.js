class Server{
    constructor(ip, port){
        this.ip = ip
        this.port = port
    }

    get url() {
        return `https://${this.ip}:${this.port}`
    }

}

function serverMicrosoft(server) {
    server.microsoft = true
    server.fest = false    
    return server
}

function serverLinux(server) {
    server.isLinux = true
    server.port += 111
    return server
}

const serverOne = new Server('12.23.34.45',222)
const serverTwo = new Server('12.23.34.45',222)

const resultOne = serverMicrosoft(serverOne)
const resultTwo = serverLinux(serverTwo)

console.log(resultOne.ip)
console.log(resultOne.microsoft)
console.log(resultOne.url)
console.log('===============')
console.log(resultTwo.ip)
console.log(resultTwo.isLinux)
console.log(resultTwo.microsoft)
console.log(resultTwo.url)