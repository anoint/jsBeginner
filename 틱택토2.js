//태그 가져오기
var 비동기함수 = function (e) {
    console.log(e.target);
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        var tdd = document.getElementsByTagName('td');
        console.log(tdd);
        tdd.addEventListener('click', 비동기함수);
    }
}

