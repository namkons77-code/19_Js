let date = new Date();
console.log(date);

let jan01_1970 = new Date(0); // GMT 기준
console.log(jan01_1970);

let jan02_1970 = new Date(24 * 60 * 60 * 1000); // 1일 = 86400000
console.log(jan02_1970);
console.log(jan02_1970.getTime());

console.log(date.getTime());

let date1 = new Date("2000-10-10/00:00:00"); //파이썬에서도 사용
let date3 = new Date("2003/10/10/00:00:00"); //파이썬에서도 사용
let date2 = new Date("2002.10.10/00:00:00");
let date4 = new Date("2004 10 10/00:00:00");
let date5 = new Date(2005, 10 - 1, 10, 0, 0, 0, 0, 0); //월 시작이 0.. => -1
let date6 = new Date(2006, 8 + 1, 10);
console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);
console.log(date5);
console.log(date6);

// let timeStamp = time.getTime();

let date7 = new Date(2007, 9, 10);
console.log(date7);
console.log(date7.getFullYear());
console.log(date7.getMonth());
console.log(date7.getDate());
console.log(date7.getDay());
console.log(date7.getHours());
console.log(date7.getMinutes());
console.log(date7.getSeconds());
console.log(date7.getMilliseconds());

let date8 = new Date(2008, 9, 10);
date8.setFullYear(2021);
date8.setMonth(10);
console.log(date8);
