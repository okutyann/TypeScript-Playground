let hasValue: boolean = false;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let string: string = "ハロー";
let double: string = "ハロー。";
let back: string = `ハロー！`;

const person: {
  name: string;
  age: number;
} = {
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
const person2: object = {
  name: "ジャック",
  age: 21,
};
//エラーでる
console.log(person2.age);

const fruits = ["Apple", "banana", "grap"];

//予期していない型をいれない
const fruits2: string[] = ["Apple", "banana", "grap"];
fruits2.push("orange");
fruits2.push(1);

//any型は何でもあり
const fruits3: any[] = ["Apple", "banana", "grap", 1];

const book = ["business", 1500, false];
//Tuple型(型注釈のみ)
const book2: [string, number, boolean] = ["business", 1500, false];

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
enum CoffeeSize2 {
  SHORT = "SHORT",
  TALL = "TALL",
  GRANDE = "GRANDE",
  VENTI = "VENTI",
}
const coffee2 = {
  hot: true,
  size: CoffeeSize2.TALL,
};
coffee2.size = CoffeeSize2.GRANDE;

//数字になる
enum CoffeeSize3 {
  SHORT,
  TALL,
  GRANDE,
  VENTI,
}

//どんな型にもなるany型
let anyting: any = true;
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
let unionType: number | string = 10;
let unionTypes: (number | string)[] = [21, "hello"];
