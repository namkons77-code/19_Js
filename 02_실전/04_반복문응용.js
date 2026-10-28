let arr = [1, 2, 3, 4, 5];
for (idx = 0; idx < 4; idx++) {
  console.log(arr[idx]);
}

let food = ["짜장면", "피자", "치킨"];
for (let item of food) {
  console.log(item);
}

//--------------------------------------------

let person = {
  name: "kkk",
  age: 25,
  location: "대구",
};

let keyArr = Object.keys(person);
console.log(keyArr);

for (let key of keyArr) {
  let value = person[key];
  console.log(key, value);
}

const valueArr = Object.values(person);
console.log(valueArr);

for (let key2 in person) {
  const value = person[key2];
  console.log(key2, value);
}
// for...in과 for...of의
// 핵심 차이는 "키(Key/인덱스)를 순회하느냐"와 "값(Value)을 순회하느냐"입니다.
