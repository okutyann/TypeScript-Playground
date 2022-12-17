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
