class SameDatabase{
    constructor(data){

        if(SameDatabase.ok){
            return SameDatabase.instance
        }

        SameDatabase.instance = this
        SameDatabase.ok = true
        this.data = data
    }

    discript(){
        console.log(`Carrent database - ${this.data}`)
    }

}

currentlyBD = new SameDatabase('sql')
currentlyBD.discript()

currentlyBD1 = new SameDatabase('mongoBD')
currentlyBD1.discript()