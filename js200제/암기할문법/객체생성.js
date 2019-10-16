//객체 생성
var family = {
    'address' : 'Seoul',
    members: {},
    addFamily: function (age, name, role)
    {
        this.members[role] = { //[]대괄호에 왜 인덱스가 아니고?
            age: age,
            name: name
        };
    },
    getHeadcount: function() {
        return Object.keys(this.members).length;//keys란 함수가 있음.
    }
};

family.addFamily(30, 'chole', 'aunt');
family.addFamily(30, 'lyn', 'niece');
family.addFamily(30, 'dangdangi', 'dog');
console.log(family.getHeadcount());