//스코프 변수
var name = 'jina';
function outer() {
    console.log('외부', name); // jina
    function inner() {
        var enemy = 'nero';
        console.log('내부', name); // jina
        
    }
    inner();
}
outer();
// console.log(enemy); // nero

//렉시컬 스코프 : 코드가 적힌 순간 스코프가 정해짐
var name = 'jina';
function log() {
    console.log(name); //jina
}
function wrapper() {
    var name = 'rina'; // var는 function 범위만 사용가능하다.
    log(); //rina(o), jina(o)
}
wrapper(); //rina

//클로저: 반복문안에 비동기함수를 사용할 때 사용함.
//before : 
for (let i = 0; i < 100; i++) {
    setTimeout(function() {
        console.log(i);
    }, i * 1000);    
}
// --- 반복문 실행되는 구문--------------------------------------
setTimeout(function() { // 스코프체인을 따라서 변수를 찾고 비동기함수는 실행되는 순간에 변수값을 찾는다.
    console.log(i); // 100 - 100개반복문이 만들어 진 후 실행됨.
}, 0 * 1000);  //0초

setTimeout(function() {
    console.log(i); // 100
}, 1 * 1000);   //1초 뒤에 i를 찾음

setTimeout(function() {
    console.log(i); //100
}, 2 * 1000);  
//함수 안의 변수는 실행될 때 값이 결정됨.
//-------------------------------------------

//after : 실제 인자로 값을 가짐
for (let i = 0; i < 100; i++) {
    function 클로저(i) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000);    
    } 클로저(i); //만든 직후 실행하도록 
}
// --- 반복문 실행되는 구문--------------------------------------
function 클로저 (i) {
    setTimeout(function() { //  
        console.log(i); //0  
    }, 0 * 1000);  //0초
}
function 클로저 (i) {
    setTimeout(function() { //  
        console.log(i); //1  
    }, 1 * 1000);  //1초
}
function 클로저 (i) {
    setTimeout(function() { //  
        console.log(i); //2  
    }, 2 * 1000);  //2초
} 

