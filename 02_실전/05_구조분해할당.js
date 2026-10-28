let arr = [1, 2, 3];

let one = arr[0];
let two = arr[1];
let three = arr[2];

console.log(one, two, three);

let [o1, o2, o3] = arr;
console.log(o1, o2, o3);

let [q1, q2, q3, q4] = arr;
console.log(q1, q2, q3, q4);

//--------------------------------------------

let person = {
  name: "kkk",
  age: 25,
  location: "eorn",
};

// let [name1, age1, location1] = person;
// console.log(name1, age1, location1);

// function func({ name2, age2, location2 }) {
//   console.log(name2, age2, location2);
// }
// func(person);
function func({ name, age, location }) {
  console.log(name, age, location);
}
func(person);

//-------------------------------------------
