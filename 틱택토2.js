/*
틱택톡 구현 순서
1.3*3칸을 준비한다.
1-1. 배열 데이터를 만든다.
2.칸을 클릭했다.
3.빈칸이면 해당 턴을 표시한다.
4.세줄이 되었는지 확인한다.
5.세줄이 되면 승부를 표시한다. 
6.세줄이 안되면 턴을 넘긴다. 
*/
var body = document.body;
var table = document.createElement('table');
var rows = [];
var cols = [];
var turn = 'X';
var result = document.createElement('div');
var bingo = false;
var ajaxCallback = function (e) {
	//신기방기 왜 태그가 찍히는데 인덱스를 어떻게 알지????
  /* console.log(e.target.parentNode);
  console.dir(e.target.parentNode) */
	//sectionRowIndex: 2
  //객체이므로 index정보가 들오잇엄...
  //객체는 index 정보를 뽑아주나?
	var rowIdx = rows.indexOf(e.target.parentNode);
  var colIdx = cols[rowIdx].indexOf(e.target);
  /* console.log(cols[rowIdx][colIdx]) */
    /* console.dir(cols[rowIdx][colIdx]) */;
  if(cols[rowIdx][colIdx].textContent === '')
  {
     cols[rowIdx][colIdx].textContent = turn;
     
     //세줄이 되었나?
     //가로줄 검사
     if(cols[rowIdx][0].textContent === turn &&
				cols[rowIdx][1].textContent === turn &&
        cols[rowIdx][2].textContent === turn)
     {
     		bingo = true;
     }
     //세로줄 검사
     if(cols[0][colIdx].textContent === turn &&
				cols[1][colIdx].textContent === turn &&
        cols[2][colIdx].textContent === turn)
     {
     		bingo = true;
     }
     //왼쪽 대각선 검사
     // 인덱스 번호 규칙으로 짧게 가능하다.!
      if (rows - cols === 0) {
        if(cols[0][0].textContent === turn &&
           cols[1][1].textContent === turn &&
           cols[2][2].textContent === turn)
         {
            bingo = true;
         }
     }
     //오른쪽 대각선 검사
     //굳이 왜썻을까??
     if (Math.abs(rows - cols) === 2) {
       if(cols[0][2].textContent === turn &&
          cols[1][1].textContent === turn &&
          cols[2][0].textContent === turn)
       {
          bingo = true;
       }
     }
     if(bingo)
     {
     	result.textContent = turn + '님이 승리!!';
     	 //초기화
       //**이해함**
       //console.log(cols);
       //[[td,td,td],[td,td,td],[td,td,td]] 
        cols.forEach( function (row) {
        	//console.log(row);
          //[[td,td,td],[td,td,td],[td,td,td]] 한줄씩 돌린다.
          //[td,td,td]
        	row.forEach( function (col) {
          //[td,td,td]를 하나씩 돌린다.
          //console.log(col);
          	col.textContent = '';
          });
        });   
        
     }
     else
     {
       if(turn === 'X')
       {
          turn = 'O';
       } else
       {
          turn = 'X';
       }
     }
     
  }
} 
for(let i=0; i<3; i++) // i조건에 불일치하면 종료
{
	var tr = document.createElement('tr');
	rows.push(tr); 
  // 2차원 배열 cols 만들기 **이해함**
  // [[td,td,td]]
  // 위 구조로 감싸는 빈배열을 생성함
  cols.push([]);
  for(let j=0; j<3; j++)
  {
    var td = document.createElement('td');
    tr.appendChild(td);
    // 2차원 배열 cols 만들기 **이해함** 
    // [td]
    // [td,td]
    // [td,td,td]
    // 만든빈배열에 td를 추가함.
    cols[i].push(td);
		//이벤트 추가
    td.addEventListener('click',ajaxCallback); 
	}
  table.appendChild(tr);
}

body.appendChild(table);
body.appendChild(result);
// html태그 추가하는 것.-appendChild.
//이벤트 추가. -addEventListener('click', ajaxCallback);
