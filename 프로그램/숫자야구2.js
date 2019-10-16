var 바디 = document.body;
var 숫자후보 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var 숫자배열 = [];
for (var i = 0; i < 4; i++) {
    var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    숫자배열.push(뽑은것);
}
var 결과 = document.createElement('h1');
바디.append(결과);
var 폼 = document.createElement('form');
document.body.append(폼);
var 입력창 = document.createElement('input');
폼.append(입력창);
var 버튼 = document.createElement('button');
버튼.textContent = '버튼';
폼.append(버튼);
const 최대시도갯수 = 4;
var 시도갯수 = 0;
var 스트라이크 = 0; //스트라이크와 볼 표시
var 볼 = 0;

window.onload = function () {
    입력창.focus();
    console.log(숫자배열 + '정답을 맞춰보세요');
}
폼.addEventListener('submit', function 콜백함수(이벤트) {
    이벤트.preventDefault();
    볼 = 0;
    스트라이크 = 0;
    var 입력값 = 입력창.value;
    var 입력답 = 입력값.split('');
    var 정답 = 숫자배열.join('');

    if (숫자배열.join('') === 입력값) { //답이 맞으면 
        결과.textContent = '홈런';
        입력창.value = '';
        입력창.focus();
        숫자후보 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        숫자배열 = [];
        for (var i = 0; i < 최대시도갯수; i++) {
            var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
            숫자배열.push(뽑은것);
        }
    }
    else { // 틀리면
        if (시도갯수 < 3) {
            for (i = 0; i < 숫자배열.length; i++) {

                if (Number(입력값[i]) === Number(정답[i])) { // 자리수,숫자 맞음 
                    스트라이크 += 1;
                }
                else if (숫자배열.indexOf(Number(입력답[i])) > -1) { // 숫자맞음, 자리수 틀림
                    볼 += 1;
                }
            }
            시도갯수 += 1;
            결과.textContent = '스트라이크는 ' + 스트라이크 + '개, 볼은 ' + 볼 + '개 입니다. 남은 시도 횟수는 ' + String(최대시도갯수 - 시도갯수) + '입니다.';
            입력창.value = '';
            입력창.focus();
        } else {

            결과.textContent = '시도횟수를 초과하였습니다. 답은 ' + 숫자배열 + '입니다';
        }

    }
})
//결과 확인하기