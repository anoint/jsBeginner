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