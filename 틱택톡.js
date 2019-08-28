var 바디 = document.body;
var 테이블 = document.createElement('table');
var 칸들 = [];
var 줄들 = [];
var 턴 = 'X';
var 비동기콜백 = function (이벤트) {
    console.log(이벤트.target); //td
    console.log(이벤트.target.parentNode); //tr
    console.log(이벤트.target.parentNode.parentNode); //table
    var 몇줄 = 줄들.indexOf(이벤트.target.parentNode);
    console.log('몇줄이 왜 -1???' + 몇줄);
    console.log(칸들[몇줄]);
    var 몇칸 = 칸들[몇줄].indexOf(이벤트.target);

    if (칸들[몇줄][몇칸].textContent !== '') {
        console.log('빈칸이 아닙니다.');

    }
    else {
        console.log('빈칸입니다.');
        칸들[몇줄][몇칸].textContent = 턴;
        if (턴 === 'X') {
            턴 = 'O';
        }
        else {
            턴 = 'X';
        }
    }
};
//반복을 하면 프로그래머가 아니다.
for (let i = 1; i <= 3; i++) {
    var 줄 = document.createElement('tr');
    칸들.push([]); // 칸추가
    for (let j = 1; j <= 3; j++) {
        var 칸 = document.createElement('td');
        칸.addEventListener('click', 비동기콜백);
        칸들[i - 1].push(칸); //칸추가 
        줄.appendChild(칸);
    }
    테이블.appendChild(줄);
}
바디.appendChild(테이블);
console.log(칸들);