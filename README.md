* 로컬환경 구성
 1. 인텔리j 설치: Community버전 무료 사용가능, 가급적 Ultimate 추천(google에 등록하는방법 검색)
 2. Nodejs 설치
 3. 인텔리j에 Nodejs 플러그인 설치
 4. 모듈설치
    -- 터미널실행 >$ npm install dotenv  mongoose body-parser
    -- 자동으로 package.json 파일 및 node_modules 폴더에 추가
 5. Preferences>Languages&Frameworks>JavaScript => JavaScript language version: ECMAScript6 변경
 6. Plugin에서 MongoDB설치(Optional)
 
* 개발방법
 1. models Directory 밑에 prefix 'm'로 시작하는 .js 파일 생성
 2. 생성한 파일안에 몽고DB와 연계할 collection 스키마 정의
 3. routes Directory 밑에 prefix 'r'로 시작하는 .js 파일 생성
 4. 생성한 파일에 본인이 만든 URI로 접근시 처리할 서비스 정의
 5. app.js의 //rotes config 밑에 본인이 만든 route 파일 선언
 6. bin/www 실행->Postman tool 이용 테스트 후 push
 
* 서버환경 구성
 1. 개발환경과 Nodejs 버전 일치(v10.15.0)
 2. MongoDB설치
    -- https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/ 참조
 3. /etc/mongod.conf 설정변경
 4. mongod 서비스 시작 
    - 시작: >$ sudo service mongod start
    - 정지: >$ sudo service mongod start
    - 재시작: >$ sudo service mongod restart
    - 서비스 확인: >$ ps -ef | grep mongod
 5. DB 생성
    - >$ mongo --host config설정 IP주소 --port config설정 port
    - >$ use 데이터베이스명
    - >$ 데이터베이스명.컬렉션명.insert({데이터선언:key/value});
    
    
* 참조
 1. 몽고DB사이트: https://www.mongodb.com/
 2. Nodejs사이트: https://nodejs.org/ko/
 3. RDBSMS와 몽고DB구조 비교
    - Table   ==    Collection
    - Row     ==    Document
    - Column  ==    Field
    - Joins   ==    Embedded documents, linking    
 4. Nodejs와 몽고DB연계참조: https://poiemaweb.com/mongoose
 
* 개발서버 Release
 1. github push
 2. 서버 clone
    - >$ git clone github주소
 3. pakage.json 위치 명령어입력
    - >$ npm install
    - >$ npm start&
 4. Postman tool 이용 REST API 호출
    - Headers: Content-Type = application/x-www.form-urlencoded
   
* 운영 Deploy Strategy
 1. Docker Registry에 배포할 이미지 저장
 2. 운영서버 클러스터 구성 후 배포
    