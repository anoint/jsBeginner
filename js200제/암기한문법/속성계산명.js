var obj = {};
for (let i = 0; i < 4; i++) {
    obj['key' + i] = i;
}
console.log(obj);

var profile = 'chloe:30';
var person = {
    [profile] : true, //속성접근자 []로 계산된 속성명을 정의할 수 있다.
    [profile.split(':')[0]] : [profile.split(':')[1]]
}

console.log(person);


//2

var obj = {};
for (let i = 0; i < 4; i++) {
    obj['key' + i] = i;    
}
console.log(obj);

var profile = 'chloe:30';
var person = {
    [profile] : true,
    [profile.split(':')[0]] : [profile.split(':')[1]]
}
console.log(person);

