# script 순서
### 인터프리터 방식은 초기에 head->body를 실행한다.
### 이 문제점은 onload함수를 사용한다. 문서를 다 읽은 후에 실행하도록 해준다.
### 문법은 window.onload = function() {}
## DOMContentLoaded이벤트는 최초 HTML 문서가 완전히 로드 및 파싱되었을때 발생된다.

# parcel 셋팅
### npm install -g parcel-bundler
# 프로젝트 설정
### npm init
### main.js에 require('./main.scss') 추가
# scss 설정
### npm install --save node-sass
# axios 설정(cdn 방식,npm 안됨)
### <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
# 전역객체
### window

# 함수시작
### () => {}