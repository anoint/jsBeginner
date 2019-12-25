//window는 html을 Js로 컨트롤할 수 있게 만드는 통역사 역활을 한다. 글로벌 객체 
// dom(document object model)은 태그,태그의 속성을 통틀어 부른다.
// window > dom
// createElement는 태그를 생성한다. 아규먼트는 태그명이다. 대소문자 가능하다.
// append는 태그를 추가한다.
// textConetent는 텍스트 내용을 가져오거나 셋팅할수 있다. input태그는 value로 한다.
// 실수한것 : 1) append는 함수라서 값을 셋팅하면 안된다.
// 2) textContent는 속성이라서 함수로 표기하면  안된다.
// vscode sw는 코드에 마우스오버하면 객체,속성 정보가 뜬다.
// 이벤트를 추가할 때는 폼.addEventListener('submit', function 콜백함수(){})로 한다.
// 키보드로 엔터쳤을 때 이벤트는 폼서브미션 이벤트로 대체가능하다.
// 이벤트.preventDefault()는 기본동작하는 이벤트를 취소한다.
// innerHTML랑 innerText와 textContent의 차이점은 스페이스와 탭 공간도 가져온다.
// w3예제 공부하면 태그의 사용법을 알 수 있다. 
// vscode sw의 사용법 익히기
// 하나의 매소드를 새로 알게 되면 여러가지 파라미터를 시도하여 익힌다.
//서브밋 이벤트는 폼을 전송한다.
var 바디 = document.body;
document.createElement('DiV');
var 단어 = document.createElement('div');
단어.textContent = '단어';
document.body.append(단어);
document.body.append();
var 폼 = document.createElement('form');
document.body.append(폼);
var 입력창 = document.createElement('input');
폼.append(입력창);
//document.body.append(입력창);
var 버튼 = document.createElement('button');
버튼.textContent = '버튼';
폼.append(버튼);
//document.body.append(버튼);
var 결과창 = document.createElement('div');
document.body.append(결과창);

폼.addEventListener('submit', function 콜백함수(이벤트) {
    이벤트.preventDefault();
    if (단어.textContent[단어.textContent.length - 1] === 입력창.value[0]) {
        결과창.textContent = "딩동댕";
        단어.textContent = 입력창.value;
        입력창.value = '';
        입력창.focus();
    } else {
        결과창.textContent = "땡";
        입력창.value = '';
        입력창.focus();
    }
})

// var word = "유지나";
// while (true) {
//     var answer = prompt("끝말잇기 게임. 시작단어 :" + word);
//     if (answer) {
//         if (word[word.length - 1] === answer[0]) {
//             alert("맞아요");
//             word = answer;
//         }
//         else {
//             alert("땡");
//         }
//     } else {
//         break;
//     }
// }