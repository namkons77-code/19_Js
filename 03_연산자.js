// 연산자

let numA = 1;
let numB;
let numC;
numB = numC = numA;
console.log(numA, numB, numC);

console.log(1 + 2 * 10);

let num1 = (num2 = num3 = num4 = 10);
num1 += 10;
num2 -= 10;
num3 *= 10;
num4 /= 10;
console.log(num1, num2, num3, num4);

// 증감연산자
let a = (b = 1);
console.log(a++, b--); // !!출력 후 연산!!
console.log(a, b);
console.log(++a, --b); // !!연산 후 출력!!
a++;
b--;
console.log(a, b);
++a;
--b;
console.log(a, b);

// 논리연산자
let boolA = true;
let boolB = false;
console.log(boolA || boolB);
console.log(boolA && boolB);
console.log(!boolA, !boolB);
