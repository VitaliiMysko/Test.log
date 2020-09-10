var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractClass = /** @class */ (function () {
    function AbstractClass() {
    }
    return AbstractClass;
}());
var MagikClass = /** @class */ (function (_super) {
    __extends(MagikClass, _super);
    function MagikClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MagikClass.prototype.mathod1 = function () {
        console.log('mathod1');
    };
    MagikClass.prototype.mathod2 = function (str) {
        return 'sts ' + str;
    };
    return MagikClass;
}(AbstractClass));
var magik = new MagikClass;
magik.mathod1();
console.log(magik.mathod2('Hello'));
// protected vs private
// як і protected так і private ми бачимо в похідному створеному обєкті 
// але звертатися до них і змінювати їх на пряму ми не можемо
// protected ми можеш змінювати за допомогою внутрішніх механізмів як 
// в обєкті що створений з основного класу так і з дочірних
// private ми можемо змінювати ЛИШЕ за допомогою внутршініх механізмів
// в обєкті що створений з ОСНОВОГО класу
var Test = /** @class */ (function () {
    // readonly myLevelEnglish: string
    // constructor(myLevelEnglish: string = 'A2', anyNumber){
    //     this.myLevelEnglish = myLevelEnglish
    //     this.anyNumber = anyNumber 
    // }
    // альтернативний запис вище закоментованого коду
    function Test(myLevelEnglish, anyNumber) {
        if (myLevelEnglish === void 0) { myLevelEnglish = 'A2'; }
        this.myLevelEnglish = myLevelEnglish;
        this.cardinalPoints = ['winter', 'spring', 'summer', 'autumn'];
        this.anyNumberPrivat = 20;
        this.anyStr = 'any string';
        this.anyNumber = anyNumber;
    }
    Test.prototype.apartcardinalPoints = function () {
        return this.cardinalPoints.join('~');
    };
    Test.prototype.halfCardinalPoints = function () {
        this.cardinalPoints.length = Math.floor(this.cardinalPoints.length / 2);
        return this.cardinalPoints;
    };
    Test.prototype.addCardinalPoints = function (sameValue) {
        this.cardinalPoints.push(sameValue);
        return this.cardinalPoints;
    };
    Test.prototype.addArr = function (sameValue) {
        return this.addCardinalPoints(sameValue);
    };
    Test.prototype.getProtectedAnyStr = function () {
        this.anyStr = this.anyStr + '!!!';
        return this.anyStr;
    };
    Test.prototype.getPrivateNumber = function () {
        this.anyNumberPrivat = this.anyNumberPrivat + 5;
        return this.anyNumberPrivat;
        //return this.anyNumberPrivat + 5
    };
    return Test;
}());
var myTest = new Test('C1', 13);
//myTest.anyNumber = 1.3
console.log(myTest);
var NewTest = /** @class */ (function (_super) {
    __extends(NewTest, _super);
    function NewTest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.message = 'message';
        _this.anyobj = {
            x: 10,
            y: 5,
            od: undefined
        };
        return _this;
    }
    NewTest.prototype.one = function () {
        return '==>' + this.anyStr + this.anyNumber;
    };
    NewTest.prototype.sqeury = function () {
        return this.anyobj.x * this.anyobj.y * this.anyNumber; // + (!this.anyobj.od) ? 0 : this.anyobj.od
    };
    NewTest.prototype.getProtectedAnyStr = function () {
        _super.prototype.getProtectedAnyStr.call(this);
        this.anyStr = this.anyStr + '???';
        return this.anyStr;
    };
    //перемінну "anyNumberPrivat" змінювати можешмо лише в обєкті що створений на остнові класу де він оголошений
    NewTest.prototype.getPrivateNumber = function () {
        var res = _super.prototype.getPrivateNumber.call(this);
        return res;
    };
    return NewTest;
}(Test));
var newTest = new NewTest('DD', 55);
console.log(newTest);
// console.log(newTest.one())
// console.log(newTest.sqeury())
// console.log(newTest.getProtectedAnyStr())
// console.log(newTest.getPrivateNumber())
// newTest.addArr('OOOOO')
// console.log(newTest)
