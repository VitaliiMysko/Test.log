// function Server(name, ip){
//     this.name = name
//     this.ip = ip
// }

// Server.prototype.getUrl = function(){
//     return `https://${this.ip}:80`
// }

class Server {
    constructor(name,ip){
        this.name = name
        this.ip = ip
    }

    getUrl(){
        return `https://${this.ip}:80`
    }

}

const fn = new Server('test','100.82.83.102')


console.log(fn.getUrl())

