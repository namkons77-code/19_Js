console.log("1번");
console.log("2번");
console.log("3번");

setTimeout(function () {
  console.log("4번");
}, 3000);
console.log("5번");

// setTimeout(console.log("6번"), 3000);
console.log("7번");

console.log("--------------------------------");
//--------------------------------------------

function orderCoffee(coffee, time) {
  setTimeout(() => {
    console.log(`${coffee} 완료`);
  }, time);
}

orderCoffee("달콤커피", 4000);
orderCoffee("레몬티", 2000);
orderCoffee("시원커피", 3000);

//--------------------------------------------
console.log("--------------------------------");
//--------------------------------------------

function double(num, cb) {
  setTimeout(() => {
    const doubleNum = num * 2;
    cb(doubleNum);
  }, 1000);
}

double(10, (res) => {
  console.log(res);
});
console.log("END");
