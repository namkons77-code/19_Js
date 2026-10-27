// 객체 생성과 프로퍼티

// let objA = {};
// let objB = new Object();

// let person = {
//   name: "kkk",
//   age: 25,
//   "like Cat": true,
// };
// console.log(person);
// console.log(person.name);
// console.log(person["name"]); // 파이썬 동일
// // console.log(person."like Cat"); // 안됨
// console.log(person["like Cat"]); // 파이썬 동일

// person.gender = "male";
// person["nickname"] = "winter";
// console.log(person.gender);
// console.log(person["nickname"]);

//--------------------------------------------

// // 프로퍼티 수정
// let cat = {
//   name: "치삼이",
//   age: 4,
// };

// const dog = {
//   name: "어삼이",
//   age: 4,
// };

// cat.name = "치삼";
// console.log(cat);
// delete cat.age;
// console.log(cat);
// dog.name = "가삼";
// dog.age = undefined;
// console.log(dog);

// //--------------------------------------------

// // in 연산자
// let obj = { a: 1 };
// console.log(obj.b);
// console.log(obj.b);
// let isPropertyExist = obj !== undefined;
// console.log(isPropertyExist);

// let person = {
//   age: 10,
// };
// let isNameExist = "name" in person;
// console.log(isNameExist);

//--------------------------------------------

// 매서드
let person = {
  name: "이전황",
  sayHi: function () {
    // =>() =>
    console.log("안녕");
    console.log("안녕");
  },
};
person.sayHi();
