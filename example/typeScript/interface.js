var boom = {
    id: 'Unic id',
    power: 13,
    info: function (par) {
        return (par > 0) ? true : false;
    },
    log: function () {
        console.log('hello');
    }
};
var superPuper = {
    id: 44,
    power: 50,
    nameInterface: 'Super',
    info: function (par) { return Math.pow(par, 2) ? true : false; },
    log: function () {
        console.log(this.info(0));
        return void 0;
    },
    // getNameInterface: () => this.nameInterface
    // getNameInterface: function() {
    //     return this.nameInterface
    // }
    getNameInterface: function () {
        return this.nameInterface;
    }
};
var More = /** @class */ (function () {
    function More() {
        this.anyNum = 33;
        this.anyStr = 'any';
    }
    More.prototype.toUpper = function () {
        return this.anyStr.toUpperCase();
    };
    return More;
}());
var more = new More;
more.anyStr = "same";
console.log(more.toUpper());
var vegetables = {};
vegetables['ka ram ba'] = 'ka ram ba';
vegetables['enion'] = 'onion';
vegetables['potato'] = 'potato';
console.log(vegetables);
