// console.log(14*11);
// console.log(~14);
// console.log(14|11);
// console.log(14^11);
// console.log(2<<2);
// console.log(14>>1);
// console.log(14>>>2)

var num = 14, num2 = 11;
var oper = ['&','|','^','<<','>>','>>>'];
oper.forEach(element => {
    var result = `${num} ${element} ${num2}`;
    // console.log(element);
    console.log(`${num.toString(2)}와 ${num2.toString(2)}의 논리곱& 연산 결과는? ${eval(result)}`);
});
// console.log(num2);
// console.log(num * num2);
// console.log(~num);


