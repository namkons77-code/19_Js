// let a = 1; // 전역변수
// function foo() {
//   let b = 1; // 지역변수
//   console.log(a);
//   console.log(b);
// }
// function bar() {
//   console.log(a);
// }
// foo();
// bar();
// console.log(a);
// console.log(b);

// for (let i = 0; i < 10; i++) {
//   let c = 1;
// }
// console.log(i);
// console.log(c);

//--------------------------------------------

// function foo() {
//   console.log("foo");
// }
// function bar() {
//   foo();
//   console.log("bar");
// }
// bar();

//--------------------------------------------

if (true) {
  function foo() {
    console.log("foo");
  }
}
foo();

//--------------------------------------------

for (let i = 0; i < 10; i++) {
  function bar1() {
    console.log("bar1");
  }
}
bar1();

//--------------------------------------------

if (true) {
  var a = 1;
}
console.log(a);
