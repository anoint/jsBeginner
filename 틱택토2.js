var body = document.body;
var table = document.createElement('table');
var tr = document.createElement('tr');
var td = document.createElement('td');
var 줄들 = [];
var 칸들 = [];

//태그 가져오기
var 비동기함수 = function (e) {
    console.log(e.target);
}

for (let i = 0; i < 3; i++) {
    줄들.push(tr);
    for (let j = 0; j < 3; j++) {
        칸들[j - 1].push(td);
        td.addEventListener('click', 비동기함수);
    }
}

//1. html태그만들기
//2. 클릭이벤트연결하여 줄칸인덱스 알아내기
//3. 줄검사
//4. 승부 표시
