
//배열공간 만들기
/* var 후보군 = Array(45);
console.log(후보군); */
//empty * 45

//빈배열 빈값넣기 
/* var 필 = 후보군.fill();
console.log(필); */
// undefined * 45

//값 채우기 (forEach와 map 둘다 가능)
/* 필.forEach( function (요소, 인덱스) {
  필[인덱스] = 인덱스 + 1;
});
 */
/*  1.랜덤숫자 생성
        Math.floor(Math.random() * 후보군.length
    2.뽑은 숫자는 후보군에서 삭제
        후보군.splice(Math.floor(Math.random() * 후보군.length), 1)
    3.배열값으로 
       후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
    4.추첨값 저장
    var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
    5. 배열값 추가
    셔플.push(이동값);
*/
//값채우기 
var 후보군 = Array(45)
    .fill()
    .map(function (요소, 인덱스) {
        return 인덱스 + 1;
    });
/* console.log(후보군); */

var 셔플 = [];
//length 스펠링 주의
while (후보군.length > 0) {
    var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
    셔플.push(이동값);
}
/* console.log(셔플); */
var 보너스 = 셔플[셔플.length - 1];
//보너스 숫자는 45개배열에서 마지막 배열로 선정한다.
var 당첨숫자들 = 셔플.slice(0, 6);
// 당첨숫자 6개는 앞에서 6개를 가져온다.
/* console.log(보너스); */
//당첨숫자를 정렬한다.
var 당첨정렬 = 당첨숫자들.sort(function (p, c) { return p - c; });
console.log(당첨숫자들);


