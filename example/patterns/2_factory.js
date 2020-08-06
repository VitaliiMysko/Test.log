class SimpleMembership{
    constructor(name){
        this.name = name
        this.last = 50
    }
}

class StandardMembership{
    constructor(name){
        this.name = name
        this.last = 150
    }
}

class PremiumMembership{
    constructor(name){
        this.name = name
        this.last = 500
    }
}

class MembershipFactory{
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership
    }

    create(name, type = 'simple'){

        const MembershipCarrent = MembershipFactory.list[type] || MembershipFactory.list.simple
        const membership = new MembershipCarrent(name)

        membership.last +=1 
        membership.type = type
        membership.discrip = function(){
            console.log(`${this.name} _|_ ${this.last} _|_ ${this.type}`)
        }

        return membership

    }
}

const factory = new MembershipFactory()
const arr = [
    factory.create('Vitalij', 'simple'),
    factory.create('Tanya', 'premium'),
    factory.create('Sofia', 'standard'),
    factory.create('Vova', 'standart'),
    factory.create('Igor')
]

arr.forEach(m => {
    m.discrip()
})







