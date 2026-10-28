let arrA = [1, 2, 3];
let arrB = [arrA, 4, 5, 6];
let arrC = [...arrA, 7, 8, 9]; // ...:풀어줌
console.log(arrB);
console.log(arrC);

let objA = { a: 1, b: 2 };
let objB = { objA, a: 3, b: 4 };
let objC = { ...objA, a: 5, b: 6 };
console.log(objB);
console.log(objC);

function func(...rest) {
  console.log(rest);
}
func(1, 2, 3, 4);

function func1(param, c, ...r) {
  //function func2(...r, param) 안묌
  console.log(param, c);
  console.log(r);
}
func1(1, 2, 3, 4);
