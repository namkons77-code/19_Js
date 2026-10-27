// AND 단락평가

function calcA() {
  console.log("a");
  return false;
}

function calcB() {
  console.log("b");
  return true;
}

console.log(calcA() && calcB()); // calcA 실행 시 false라서 calcB 실행 안 됨

//--------------------------------------------

// AND 단락평가를 이용해 오류 방지하기

function calcC() {
  console.log("c");
  return undefined;
}

function calcD() {
  console.log("d");
  return true;
}

console.log(calcC() && calcD());

//--------------------------------------------

// function getname(person) {
//   return person.name;
// }
// let person;
// let name = getname(person);
// console.log(name);
//--------------------------------------------

// function getname(person) {
//   if (person !== undefined) {
//     return person.name;
//   } else {
//     return "매개변수 객체가 아님";
//   }
// }
// let person;
// let name = getname(person);
// console.log(name);

//--------------------------------------------

function getName(person) {
  return person && person.name;
}

let person = { name: "ㅏㅏㅏ" };

let name1 = getName(undefined);
let name2 = getName(null);
let name3 = getName(person);

console.log(name1, name2, name3);

//--------------------------------------------
// OR 단락평가

function calcE() {
  console.log("e");
  return true;
}
function calcF() {
  console.log("f");
  return false;
}
console.log(calcE() || calcF());

const name4 = "ㅓㅓㅓ" || undefined;
console.log(name4);

//--------------------------------------------
