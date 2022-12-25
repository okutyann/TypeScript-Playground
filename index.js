"use strict";
let hasValue = false;
let count = 10;
let float = 3.14;
let negative = -0.12;
let string = "ハロー";
let double = "ハロー。";
let back = `ハロー！`;
const person = {
    name: "ジャック",
    age: 21,
};
console.log(person.age);
//ネストも可能
const person1 = {
    name: {
        first: "ジャック",
        last: "Smith",
    },
    age: 21,
};
//この書き方もありだが、すごく一般的なオブジェクトな型のため使用しない
const person2 = {
    name: "ジャック",
    age: 21,
};
//エラーでる
console.log(person2.age);
const fruits = ["Apple", "banana", "grap"];
//予期していない型をいれない
const fruits2 = ["Apple", "banana", "grap"];
fruits2.push("orange");
fruits2.push(1);
//any型は何でもあり
const fruits3 = ["Apple", "banana", "grap", 1];
const book = ["business", 1500, false];
//Tuple型(型注釈のみ)
const book2 = ["business", 1500, false];
//初期値は厳しいが追加するときはゆるゆるのためエラーでない
book2.push(21);
const CoffeSize = {
    SHORT: "SHORT",
    TALL: "TALL",
    GRANDE: "GRANDE",
    VENTI: "VENTI",
};
const coffee = {
    hot: true,
    size: CoffeSize.TALL,
};
//列挙型は特定のグループのみを受け入れる
var CoffeeSize2;
(function (CoffeeSize2) {
    CoffeeSize2["SHORT"] = "SHORT";
    CoffeeSize2["TALL"] = "TALL";
    CoffeeSize2["GRANDE"] = "GRANDE";
    CoffeeSize2["VENTI"] = "VENTI";
})(CoffeeSize2 || (CoffeeSize2 = {}));
const coffee2 = {
    hot: true,
    size: CoffeeSize2.TALL,
};
coffee2.size = CoffeeSize2.GRANDE;
//数字になる
var CoffeeSize3;
(function (CoffeeSize3) {
    CoffeeSize3[CoffeeSize3["SHORT"] = 0] = "SHORT";
    CoffeeSize3[CoffeeSize3["TALL"] = 1] = "TALL";
    CoffeeSize3[CoffeeSize3["GRANDE"] = 2] = "GRANDE";
    CoffeeSize3[CoffeeSize3["VENTI"] = 3] = "VENTI";
})(CoffeeSize3 || (CoffeeSize3 = {}));
//どんな型にもなるany型
let anyting = true;
anyting = "hell";
anyting = [21, "hello", false];
//基本はオブジェクトは途中から変更ができないがそれもできちゃう
anyting = {};
anyting.asdg = "asdg";
//anyはなるべく使わない
//Typescriptではanyはお手上げ状態（javascriptに戻したいときは便利）
let banana = "banana";
banana = anyting;
//Union型（下記はnumberもstringも使う）
let unionType = 10;
let unionTypes = [21, "hello"];
//特定の値のみ取り扱う
//constにした瞬間Literal型になる
//下記の場合はappleしか扱えない
const apple = "apple";
const orange = "grap";
//enum型
var clothSize2;
(function (clothSize2) {
    clothSize2["small"] = "small";
    clothSize2["miium"] = "miium";
    clothSize2["large"] = "large";
})(clothSize2 || (clothSize2 = {}));
const cloth2 = {
    color: "white",
    size: clothSize2.large,
};
//Union型とLiteral型の組み合わせ
let clothSize = "large";
const cloth = {
    color: "white",
    size: clothSize, //enum型みたいにclothSize.largeはできない
};
const cloth3 = {
    color: "white",
    size: "miidum",
};
//関数に型を適応
//パラメータは必ず型をつける（anyになってしまうから）
//返り値もできるだけつける
function add(num1, num2) {
    return num1 + num2;
}
//void型（何も返さないと言いつつundefinedが返る）
function sayHell() {
    console.log("hello");
}
//undefinedはreturnがないと使えない
function sayHell2() {
    console.log("hello");
    return;
}
//undefinedにnullはいれるしその逆もできる
let tmp = undefined;
let tmpNull = null;
//関数の型注釈
const anotherAdd = add;
const doubleNumber = (num) => num * 2;
const doubleNumber2 = (numNum) => numNum * 2;
//callback
function doubleAndHandle(num, cd) {
    const doubleNum = cd(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(2, (doubleNum) => {
    return doubleNum;
});
let unknownInput;
let anyInput;
let text;
unknownInput = "hello";
unknownInput = 21;
unknownInput = true;
text = unknownInput;
anyInput = "hello";
anyInput = 21;
anyInput = true;
text = anyInput;
if (typeof unknownInput === "string") {
    text = unknownInput;
}
//never型(バージョン３から出た新しい)→決して何も返さない
function error(message) {
    throw new Error(message);
    // while (true) {}
}
console.log(error("This is an error"));
