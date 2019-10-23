console.log(14*11);
console.log(~14);
console.log(14|11);
console.log(14^11);
console.log(2<<2);
console.log(14>>1);
console.log(14>>>2)

var num = 14, num2 = 11;
var oper = ['&','~'];
var result = `${num} ${oper[0]} ${num2}`;
num = num.toString(2);
num2 = num2.toString(2);
console.log(`${num}와 ${num2}의 논리곱& 연산 결과는? ${result}`);
console.log(num2);
console.log(num * num2);
console.log(~num);


