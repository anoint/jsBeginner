var tbody = document.querySelector('#table tbody');

document.querySelector('#exec').addEventListener('click', function() {
    tbody.innerHTML = '';
    var hor = parseInt(document.querySelector('#hor').value);
    var ver = parseInt(document.querySelector('#ver').value);
    var mine = parseInt(document.querySelector('#mine').value);
    // console.log(hor, ver, mine);
    let 후보군 = Array(hor * ver)
    .fill()
    .map(function (요소, 인덱스) {
        return 인덱스;
    });

    let 셔플 = [];
    // while 문에 왜 80보다 클때 까지라고 했을까? ( 모르면 콘솔찍기 )
    // 후보군에 있는 배열 중에서 20개만 이동값으로 옮겨지면 지뢰갯수가된다.
    while(후보군.length > (hor * ver) - mine)
    {
        // console.log(후보군.length);
        let 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
        셔플.push(이동값);
    }
    // console.log(셔플);
    var dataset = [];
    for (let i = 0; i < ver; i++) {
        let arr = [];
        dataset.push(arr);
        let tr = document.createElement('tr');
        for (let j = 0; j < hor; j++) {
        arr.push(1);
        let td = document.createElement('td');
        //contextmenu는 오른쪽 마우스 클릭 이벤트
        td.addEventListener('contextmenu', function (e) {
            e.preventDefault();
            //현재 td인데 상위객체 가져오기 
            let 부모tr = e.currentTarget.parentNode;
            //현재 td인데 상위에 상위객체 가져오기 
            let 부모tbody = e.currentTarget.parentNode.parentNode;
            //?
            let 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
            console.log(칸);
            //?
            let 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
            if(e.currentTarget.textContent === '' || e.currentTarget.textContent === 'X')
            {
                e.currentTarget.textContent = '!';
            }
            else if(e.currentTarget.textContent === '!')
            {
                e.currentTarget.textContent = '?';
            }
            else if(e.currentTarget.textContent === '?')
            {
                if(dataset[줄][칸] === 1)
                {
                    e.currentTarget.textContent = '';
                } else if (dataset[줄][칸] === 'X')
                {
                    e.currentTarget.textContent = 'X';
                }
            }             
        })
        td.addEventListener('click', function (e) {
            //클릭했을때 주변 지뢰 갯수
            e.preventDefault();
            let 부모tr = e.currentTarget.parentNode;
            let 부모tbody = e.currentTarget.parentNode.parentNode;
            let 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
            console.dir(부모tr.children);
            console.log(e.currentTarget);
            console.log("칸 "+칸);
            let 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
            console.dir("줄 item"+부모tbody.children);
            console.dir("줄 item"+부모tr);
            console.log("줄 item"+줄);
            if (dataset[줄][칸] === 'X')
            {
                e.currentTarget.textContent = '펑';
            } else 
            {
                let 주변 = [
                    dataset[줄][칸-1], dataset[줄][칸+1]
                ];
                if(dataset[줄-1])
                {
                    주변 = 주변.concat([dataset[줄-1][칸-1],dataset[줄-1][칸], dataset[줄-1][칸+1]])
                    주변.push();
                }
                if(dataset[줄+1])
                {
                    주변 = 주변.concat([dataset[줄+1][칸-1],dataset[줄+1][칸],dataset[줄+1][칸+1]]);
                }
               e.currentTarget.textContent = 
            //    [
            //        dataset[줄-1][칸-1], dataset[줄-1][칸], dataset[줄-1][칸+1],
            //        dataset[줄][칸-1],
            //        dataset[줄+1][칸-1], dataset[줄+1][칸], dataset[줄+1][칸+1]
            //     ]
                주변.filter(function (x) {
                    return x === 'X';
                }).length;                
            }
        });
        tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    //지뢰넣기 ex) 30 가로0 세로3 -> 가로 30%10=0, 세로 30/10= 3, 
    for (let k = 0; k < 셔플.length; k++) {
        let 세로 = Math.floor(셔플[k] / 10);
        let 가로 = 셔플[k] % 10;
        // console.log(세로, 가로);
        tbody.children[세로].children[가로].textContent = 'X';
        dataset[세로][가로] = 'X';    
    }
    // console.log(dataset);
})

tbody.addEventListener('contextmenu', function (e) {
    // console.log(e.currentTarget);    
    // console.log(e.target);    
})

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
console.log(enemy); // nero

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