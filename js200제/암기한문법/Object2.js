var family = {
    address : 'Seoul',
    members : {}, // 문자열이 아닌 객체리터럴이다. {}
    addFamily : function (name, age, role) {
        this.members[role] = {
            name : name, 
            age : age
        }
    },
    getHeadCount: function() {
        return Object.keys(this.members).length;//keys란 함수가 있음       
       //키의 갯수를 반환하는 함수를 사용한다.
    }
}

family.addFamily('jina',28,'role');
family.addFamily('jina2',28,'role1');
family.addFamily('jina3',28,'role2');
console.log(family.getHeadCount());