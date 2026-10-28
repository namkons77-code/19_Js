let a = 1;
console.log(console.log(a)); // return값이 없어 undefined
//--------------------------------------------

let food = ["자장면", "피자", "치킨", 1];

const newLength = food.push("탕수육");
console.log(food, newLength);

const newLength1 = food.push(2, "3");
console.log(food, `새로운 길이: ${newLength1}`);

const removeItem = food.pop();
console.log(food, removeItem);

const shiftItem = food.shift();
console.log(food, shiftItem);

const unshiftItem = food.unshift("갈비찜");
console.log(food, unshiftItem);

// Array.slice(Start, end)
let arr = [1, 2, 3];
const sliced = arr.slice(0, 2);
console.log(sliced);
console.log(arr[2]);
console.log(arr[-1]);

console.log(arr.slice(2));
console.log(arr.slice(1));
console.log(arr.slice(-1));

//--------------------------------------------
let arrA = [1, 2];
let arrB = [3, 4];
let arrC = arrB.concat(arrA);
let arrD = { a: 1, b: 2 };
let arrE = arrC.concat(arrD);

console.log(arrC);
console.log(arrE);

//--------------------------------------------
