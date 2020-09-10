var listFrutscolor;
(function (listFrutscolor) {
    listFrutscolor["green"] = "lime";
    listFrutscolor["yellow"] = "lemon";
    listFrutscolor["red"] = "chery";
})(listFrutscolor || (listFrutscolor = {}));
var greenFrut = listFrutscolor.green;
var yellowFrut = listFrutscolor.yellow;
console.log(greenFrut, yellowFrut);
console.log(listFrutscolor['red']);
var similarArr;
(function (similarArr) {
    similarArr[similarArr["bike"] = 0] = "bike";
    similarArr[similarArr["scooter"] = 1] = "scooter";
    similarArr[similarArr["car"] = 2] = "car";
})(similarArr || (similarArr = {}));
console.log(similarArr.bike, similarArr.scooter);
console.log(similarArr[2]);
