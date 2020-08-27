ob1 = {
    name: 'Vitalii',
    cashback: 450
}

ob2 = Object.create(ob1,{
    surName: {
        value: 'Musko',
        enumerable: true
    },
    languageArr: {
        value: [],
        //enumerable: true,
        //writable: true,
        // configurable: true
    },
    language:{
        get(){
            return this.languageArr.join('-')
        },
        set(val) {
            if(val.length <= 2){
                this.languageArr.push(val)
            }
        }
    }
})

ob2.religins = 'greek-catolic';

for(let key in ob2){

    if(ob2.hasOwnProperty(key)){
        console.log('key', key, ob2[key])
    }

}