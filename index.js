var hasValue = false;
var count = 10;
var float = 3.14;
var negative = -0.12;
var string = "ハロー";
var double = "ハロー。";
var back = "\u30CF\u30ED\u30FC\uFF01";
var person = {
    name: "ジャック",
    age: 21
};
console.log(person.age);
//ネストも可能
var person1 = {
    name: {
        first: "ジャック",
        last: "Smith"
    },
    age: 21
};
//この書き方もありだが、すごく一般的なオブジェクトな型のため使用しない
var person2 = {
    name: "ジャック",
    age: 21
};
//エラーでる
console.log(person2.age);
var fruits = ["Apple", "banana", "grap"];
//予期していない型をいれない
var fruits2 = ["Apple", "banana", "grap"];
fruits2.push("orange");
fruits2.push(1);
//any型は何でもあり
var fruits3 = ["Apple", "banana", "grap", 1];
var book = ["business", 1500, false];
//Tuple型(型注釈のみ)
var book2 = ["business", 1500, false];
//初期値は厳しいが追加するときはゆるゆるのためエラーでない
book2.push(21);
var CoffeSize = {
    SHORT: "SHORT",
    TALL: "TALL",
    GRANDE: "GRANDE",
    VENTI: "VENTI"
};
var coffee = {
    hot: true,
    size: CoffeSize.TALL
};
//列挙型は特定のグループのみを受け入れる
var CoffeeSize2;
(function (CoffeeSize2) {
    CoffeeSize2["SHORT"] = "SHORT";
    CoffeeSize2["TALL"] = "TALL";
    CoffeeSize2["GRANDE"] = "GRANDE";
    CoffeeSize2["VENTI"] = "VENTI";
})(CoffeeSize2 || (CoffeeSize2 = {}));
var coffee2 = {
    hot: true,
    size: CoffeeSize2.TALL
};
coffee2.size = CoffeeSize2.GRANDE;
