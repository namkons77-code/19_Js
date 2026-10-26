// 연산자

// let numA = 1;
// let numB;
// let numC;
// numB = numC = numA;
// console.log(numA, numB, numC);

// console.log(1 + 2 * 10);

// let num1 = (num2 = num3 = num4 = 10);
// num1 += 10;
// num2 -= 10;
// num3 *= 10;
// num4 /= 10;
// console.log(num1, num2, num3, num4);

// // 증감연산자
// let a = (b = 1);
// console.log(a++, b--); // !!출력 후 연산!!
// console.log(a, b);
// console.log(++a, --b); // !!연산 후 출력!!
// a++;
// b--;
// console.log(a, b);
// ++a;
// --b;
// console.log(a, b);

// // 논리연산자
// let boolA = true;
// let boolB = false;
// console.log(boolA || boolB);
// console.log(boolA && boolB);
// console.log(!boolA, !boolB);

// let numberA = 2;
// let numberB = 2;
// let numberC = "2";

// console.log(numberA === numberB); // type까지 비교
// console.log(numberB === numberC);
// console.log(numberA !== numberB); // type까지 비교
// console.log(numberB !== numberC);

// console.log(numberA == numberB); // 값만 비교
// console.log(numberB == numberC);
// console.log(numberA != numberB); // 값만 비교
// console.log(numberB != numberC);

// // null 병합 연산자
// let varA = 10;
// let varB = 20;
// let varC;
// console.log(varA ?? varB); // or
// console.log(varC ?? varB); // or
// console.log(varA || varB);
// console.log(varA ** varB);

// // 삼항 조건 연산자
// const varA = "안녕하세요";
// console.log(varA);
// typeof varA === "string"   // 액셀 if(조건식,ture,false)
//   ? console.log("문자자료형")
//   : console.log("문자형이 아님");

let num = 1;
let result = num % 2 === 0 ? "짝수" : "홀수";
