/*
객체 문법 익히기
- 가족 객체를 선언한다.
  키를 4개를 추가한다. 
  주소와 구성원과 가족의 나이와 이름을 추가하는 함수와 구성원의 인원수르 출력하는 함수 
  가족 객체에 구성원을 3명 추가한다.
  인원수를 출력하는 함수를 호출하여 출력한다.
*/
var family = {
    'address' : 'Seoul',
    members : {},
    addFamily : function(name, age, role) {
        this.members[role] = {
            name : name,
            age : age
        }
    },
    getHeadCount: function() {
        return Object.keys(this.members).length;
    }
};

family.addFamily(30, 'chole', 'aunt');
family.addFamily(30, 'lyn', 'niece');
family.addFamily(30, 'jina', 'humen');

console.log(family.getHeadCount());