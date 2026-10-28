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
// 순회 매서드

// function cb(item, idex, arry) {
//   // 수행할 코드
// }
// arr.forEach(cb);

function cb(item, idx) {
  console.log(`${idx}번째 요소 : ${item}`);
}
const arr4 = [1, 2, 3];
arr4.forEach(cb);

// 탐색 메서드
// arr5.indexOf(item, fromIndex);

let arr5 = [1, 3, 4, 6, 7, 1];
console.log(arr5.indexOf(1, 0)); // 0
console.log(arr5.indexOf(1, 1)); // 4
console.log(arr5.indexOf(1, -1)); // 4
console.log(arr5.indexOf(4)); // 실패했을 때 -1 리턴
console.log(arr5.indexOf(7, 9));
console.log(arr5.indexOf("3"));

arr5.includes(3);
arr5.includes("생선");

function datemine(item, idx, arr) {
  console.log(idx, arr);
  if (item % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(arr5.findIndex(datemine));

let index7 = arr5.findIndex((item) => (item % 2 == 0 ? true : false));
console.log(index7);

//--------------------------------------------

let arr7 = [{ name: "ㄱ" }, { name: "ㄴ" }, { name: "ㄷ" }];

let index = arr7.findIndex((item) => {
  console.log(item);
  return item.name === "ㄴ";
});

// find
console.log(arr7.find((item) => item.name == "ㄴ"));

let arr8 = [
  { name: " ㄱ", hobby: "축구" },
  { name: " ㄴ", hobby: "영화" },
  { name: " ㄷ", hobby: "축구" },
  { name: " ㄹ", hobby: "노래" },
];

let filered = arr8.filter((item) => item.hobby === "축구");
console.log(filered);

arr9 = [1, 2, 3, 4];
let newArr = arr.map((item) => item * 3);
console.log(newArr);

//--------------------------------------------

let arr10 = ["b", "a", "c"];
arr10.sort();
console.log(arr10);
console.log(arr10.sort());

let arr11 = ["안녕", "나는", "ㄹㄹㄹ"];
console.log(arr11.join());
console.log(arr11.join(">>"));

let arr12 = [1, 2, 3, 4, 5];
let result12 = arr12.reduce((acc, item) => acc + item, 0); // reduce(cbf,초기값)
console.log(result12);
