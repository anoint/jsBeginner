var 바디 = document.body;
var 결과 = document.createElement("h1");
바디.append(결과);
var 폼 = document.createElement("form");
document.body.append(폼);
var 입력창 = document.createElement("input");
입력창.value = "";
폼.append(입력창);
var 버튼 = document.createElement("button");
버튼.textContent = "입력!";
폼.append(버튼);

var 숫자후보 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var 숫자배열 = [];
for (var i = 0; i < 4; i += 1) {
  var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
  숫자배열.push(뽑은것);
}
console.log(숫자배열);
console.log(Math.random());



/*  
 shift 처음것 뽑기
 pop 마지막꺼 뽑기
 pop,push <=> shift,unshift
 push 마지막에 추가
 unshift 처음에 추가
*/
/*
 pop, push [9,8,7,6]
 shift, push [1,2,3,4]
 shift, unshift [4,3,2,1]
*/
/*
splice(위치, 갯수)
배열 값이 이동 된다.

배열객체가 넣어지기 때문에 
객체값이 0번째에 있는것을 가져온다.
*/
/*
random 함수는 
0~1까지의 "0.8794235627233815" 이런 실수를 반환하기에, 
큰 숫자가 나오게끔 곱하기를 한 후, 
Math.floor() 를 사용하여 정수화시켜야 합니다.

var random = 0.8794235627233815; 
var between= 0.8794235627233815 * 9;
    between= 7.914812064510434;
var floor = 7;
*/

폼.addEventListener("click", function 비동기(이벤트) {
  이벤트.preventDefault();
  var 답 = 입력창.value;
  console.log(답);
});
