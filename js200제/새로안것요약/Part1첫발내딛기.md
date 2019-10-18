# 목표 : 오늘 45제까지 요약하기 4시-8시-4시간
# 실제 : 32까지 요약 4-6시 2시간
# 값(value)와 변수(variable)의 개념
- 컴퓨터는 이해할수 있는 형태로 표현하면 비트(bit, Binary Digit, 2진수(0과 1))다.
- 컴퓨터 CPU가 처리하는 데이터의 최소 단위 크기다.
- 모든 데이터는 비트로 구성된다.
- 컴퓨터는 데이터를 비트로 처리하고, 프로그래밍은 값이다.
- 컴퓨터가 동시에 많은 값을 유지하고 처리하려면, 어딘가에 값을 저장해야 된다.
- 값을 넣어놓는 공간을 변수(variable)이다.

# 선언 키워드
- var 키워드를 맨 앞에 작성하여 변수를 선언한다.
동적바인딩: 값의 유형을 명시하지않으면, 런타임 시 변수의 값에 의해 동적으로 유형이 결정된다.
- 피해야할 변수명 중 키워드의 종류
: break case catch class const continue debugger default delete do else export
extends finally for function if import in instance of let new return super switch this throw try type of var void while with yield
- 등호 : 변수명이 정의된 변수 메모리에 값을 대입한다.
- 값 : 단일 자료형의 값부터 표현식, 함수를 대입된다.

# 코드 구성 요소
- 코드 : 하나의 문장
- 코드를 구성하는 가장 작은 기본단위 : 값, 변수, 연산자, 키워드
- 코드의 구문 패턴 : 표현식, 명령문
- 표현식 : 값을 넣는다.
- 명령문 : 행위를 수행하게 하는 코드이다.

# 주석 
## vscode의 여러줄 주석 단축키는?

# 자료형의 종류
- 원시타입 : 값이 변수에 할당될 때 메모리 상에 고정된 크기로 저장된다.
즉, 해당 변수가 직접 값을 보관한다.
숫자5는 8바이트 메모리 공간을 두고 직접 숫자 5값을 보유하게 된다. 
변경 불가능한 값, 불변값인 특징을 가진다.
1. 숫자형
2. 문자형
3. 불린형
4. null
5. undefined
6. Symbol
## 여러줄 선택 단축키는?

- 참조타입 : 값의 메모리 주소를 참조한다. 객체는 속성들의 집합이고 순서와 크기가 정해져 있지 않다.
7. 객체 : 객체는 { } 안에 키 : 값 형태로 이루어진 속성들의 모음이다.
Global Object 객체는 모든 객체의 부모가 되는 객체이다.
표준 내장객체가 있다.

# 콘솔로그 메소드
- console.log('log와 동일한 로그 메시지')
- console.error('에러 메시지')
- console.info('정보성 메시지')
- console.warn('경고성 메시지')

# for(세미콜론으로 구분된 반복 규칙) {반복될 실행문장}
## continue는 다음의 문장들은 무시되고 다음 반복으로 넘어간다.
## break는 반복문을 종료한다.

# for-in 반복문
- 내부 요소를 하나씩 순회할 때마다 각 요소의 키 정보가 선언과 동시에 할당된다.
for ( 속성명 in 반복할 대상) { 
}
ex) for (const key in object) {
  if (object.hasOwnProperty(key)) {
    const element = object[key]; 
  }
}
## hasOwnProperty를 쓰는 이유는?
추측) null을 거르기 위해서


