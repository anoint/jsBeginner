
var    address = 'Seoul';
var    members = {};
var    addFamily = function (name, age, role) {
        this.members[role] = {
            name,
            age
        }
    };
var    getHeadCount = function() {
        return Object.keys(this.members).length;
    }
// 키이름을 변수명으로 정의하고 값을 변수에 할당할수 있음.
var family = { address, members, addFamily, getHeadCount };
family.addFamily('jina', 28, 'junior');
family.addFamily('chunyoung', 42, 'desginer')
family.addFamily('jieun', 24, 'workwoman')
console.log(family.getHeadCount());

var printMembers = function() {
    var members = family.members;
    for (const role in members) {
        if (members.hasOwnProperty(role)) {
            const element = members[role];
            console.log('role => ' + role+', name => '+ members[role].name+', age=>' + members[role].age);
        }
    }
}

printMembers();
var members = family.members;
members['junior'] = { name : 'youji' , age : 29 }
members.workwoman = { name : 'youjieun', age : 25 }
delete members.desginer;
delete members['workwoman'];
printMembers();
members['dad'] = { name : 'insik', age : 61}
members.dad = { name : 'insik', age: 62}
printMembers();
delete members.dad;
printMembers();
