let 후보군 = Array(45)
.fill()
.map(function (요소, 인덱스) {
    return 인덱스 + 1;
});

let 셔플 = [];
while(후보군.length > 0)
{
    let 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
    셔플.push(이동값);
}
let 보너스 = 셔플[셔플.length - 1];
let 당첨숫자들 = 셔플.slice(0,6)
.sort(function (p,c) {
    return p - c;
})

let 결과창 = document.getElementById('결과창');

function 공색칠하기(숫자, 결과창) {
    let 공 = document.createElement('div');
    공.textContent = 숫자;
    공.style.display = 'inline-block';
    공.style.border = '1px solid black';
    공.style.borderRadius = '25px';
    공.style.width = '50px';
    공.style.height = '50px';
    공.style.textAlign = 'center';
    공.style.verticalAlign = 'middle';
    공.style.marginRight = '25px';
    공.style.fontSize = '25px';
    공.className = '공아이디' + 숫자;
    let 배경색;
    if(숫자 <= 10)
    {
        배경색 = 'red';
    } else if(숫자 <= 20)
    {
        배경색 = 'orange';
    } else if(숫자 <= 30)
    {
        배경색 = 'yellow';
    } else if(숫자 <= 40)
    {
        배경색 = 'blue';
    } else
    {
        배경색 = 'green';
    } 
    공.style.background = 배경색;
    결과창.appendChild(공);
}
for (let index = 0; index < 6; index++) {
    let time = (parseInt(index) + 1) * 1000;
    console.log(time+' - time');
    setTimeout(() => {
        공색칠하기(당첨숫자들[index], 결과창);
    }, time);
}

// setTimeout(() => {
//     공색칠하기(당첨숫자들[0], 결과창);
// }, 1000);
// setTimeout(() => {
//     공색칠하기(당첨숫자들[1], 결과창);
// }, 2000);
// setTimeout(() => {
//     공색칠하기(당첨숫자들[2], 결과창);
// }, 3000);
// setTimeout(() => {
//     공색칠하기(당첨숫자들[3], 결과창);
// }, 4000);
// setTimeout(() => {
//     공색칠하기(당첨숫자들[4], 결과창);
// }, 5000);
// setTimeout(() => {
//     공색칠하기(당첨숫자들[5], 결과창);
// }, 6000);
setTimeout(() => {
    let 칸 = document.querySelector('.보너스');
    공색칠하기(보너스, 칸);
}, 7000);