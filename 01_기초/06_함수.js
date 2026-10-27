// 함수선언

// //파이썬
// def 함수명():
//     수행할 코드
// 함수명()

// function 함수명() {
//     수행할 코드
// }
// 함수명()

// function greeting() {
//   console.log("안녕하세요");
// }
// console.log("시작전");
// greeting();
// console.log("종료");

// function getArea() {
//   let width = 10;
//   let height = 20;
//   let area = width * height;
//   console.log(area);
// }
// getArea()

// function getArea(width, height) {
//   let area = width * height;
//   return area;
//   console.log("함수종료"); // 출력안됨: return에서 함수 종료
// }
// console.log(getArea(100, 300));

// // 중첩함수
// function greeting() {
//   function greetingWithName(name) {
//     console.log(`hello! ${name}`); //
//   }
//   let name = "KON";
//   greetingWithName(name);
// }
// greeting();

// // 함수와 호이스팅
// func(); //함수 먼저 호출해도 오류 안뜸
// function func() {
//   console.log("hello1");
// }

// // 함수표현식
// let greeting = function () {
//   console.log("hello2");
// };
// greeting();

// function greetFuc() {
//   console.log("hello3");
// }
// let greeting1 = greetFuc;
// console.log(greeting1);
// console.log(greetFuc);
// console.log(greetFuc());
// greeting1();

// // 콜백함수
// function parentFunction(callBack) {
//   console.log(callBack);
//   console.log("parent");
//   callBack();
// }
// function childFunction() {
//   console.log("child");
// }
// parentFunction(childFunction);

// function repeat(count) {
//   for (let idx = 0; idx < count; idx++) {
//     console.log(idx + 1);
//   }
// }
// repeat(5);

// function repeatDouble(count) {
//   for (let idx = 0; idx < count; idx++) {
//     console.log((idx + 1) * 2);
//   }
// }
// repeatDouble(5);

// function repeat2(count, callBack) {
//   for (let idx = 0; idx < count; idx++) {
//     //console.log(idx + 1);
//     callBack(idx + 1);
//   }
// }
// function orgin(count) {
//   console.log(count);
// }
// function double(count) {
//   console.log(count * 2);
// }
// repeat2(5, orgin);
// repeat2(5, double);

// // 화살표 함수 - 이름 없는 함수
// let funcA = (매개변수) => {반환값}
let greeting = (name) => `hello ${name}`;
console.log(greeting("KKKK"));

let isConfirm = true;
function confirm(onYes, onNo) {
  if (isConfirm) onYes();
  else onNo();
}
confirm(
  () => console.log("승인"),
  () => console.log("거부"),
);
