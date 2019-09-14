var 바디 = document.body; //문서의 내용
var 테이블 = document.createElement('table'); //테이블
var 칸들 = []; //칸들
var 줄들 = []; //현재 줄
var 턴 = 'X'; //차례
var 결과 = document.createElement('div'); //게임 승부 표시
var 비동기콜백 = function (이벤트) {
    // console.log(이벤트.target); //td 클릭한 태그
    // console.log(이벤트.target.parentNode); //tr 클릭한 부모태그
    // console.log(이벤트.target.parentNode.parentNode); //table 클릭한 조부모태그
    // console.log(이벤트.target.children); // 자식태그
    var 몇줄 = 줄들.indexOf(이벤트.target.parentNode); // 클릭한 줄 인덱스
    var 몇칸 = 칸들[몇줄].indexOf(이벤트.target); //클릭한 칸 인덱스
    console.log("몇줄 :" + 몇줄);
    console.dir("칸들[몇줄] :" + 칸들[몇줄]);
    console.log("몇칸 :" + 몇칸);
    if (칸들[몇줄][몇칸].textContent !== '') {
        // console.log('빈칸이 아닙니다.');
    }
    else {
        // console.log('빈칸입니다.');
        칸들[몇줄][몇칸].textContent = 턴;
        var 다참 = false;
        //가로줄 검사
        if (칸들[몇줄][0].textContent === 턴 &&
            칸들[몇줄][1].textContent === 턴 &&
            칸들[몇줄][2].textContent === 턴
        ) {
            다참 = true;
            console.log("가로줄 채워짐");
        }
        //세로줄 검사
        if (칸들[0][몇칸].textContent === 턴 &&
            칸들[1][몇칸].textContent === 턴 &&
            칸들[2][몇칸].textContent === 턴) {
            다참 = true;
            console.log("세로줄 채워짐");
        }
        //왼쪽대각선 검사
        if (몇줄 - 몇칸 === 0) { // ?
            if (칸들[0][0].textContent === 턴 &&
                칸들[1][1].textContent === 턴 &&
                칸들[2][2].textContent === 턴
            ) {
                다참 = true;
                console.log("대각선 채워짐");
            }
        }
        //오른쪽대각선 검사
        if (Math.abs(몇줄 - 몇칸) === 2 || (몇줄 === 1 && 몇칸 === 1)) { // ?
            if (칸들[0][2].textContent === 턴 &&
                칸들[1][1].textContent === 턴 &&
                칸들[2][0].textContent === 턴
            ) {
                다참 = true;
                console.log("대각선 채워짐");
            }
        }
    }
    if (다참) {
        console.log(턴 + '님이 승리');
        결과.textContent = 턴 + '님이 승리';
        //초기화
        턴 = 'X'
        칸들.forEach(function (줄) {
            줄.forEach(function (칸) {
                칸.textContent = '';
            });
        });
    } else {
        if (턴 === 'X') {
            턴 = 'O';
        } else {
            턴 = 'X';
        }
    }
};
//반복을 하면 프로그래머가 아니다.
for (let i = 1; i <= 3; i++) {
    var 줄 = document.createElement('tr');
    줄들.push(줄);
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
바디.appendChild(결과);