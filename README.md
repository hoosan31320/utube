# Wetube

cloning youtube

## Pages:

- [ ] Home
- [x] Join
- [x] Login
- [x] Search
- [ ] User Detail
- [x] Edit Profile
- [x] Change Password
- [x] Upload
- [ ] Video Detail
- [x] Edit Video

->mongd 로 DB Start
->mongo 명령어 이후

- -> show dbs
  -admin 0.000GB
  -config 0.000GB
  -local 0.000GB
  -> use wetube
  -switched to db wetube
  -> show dbs
  -admin 0.000GB
  -config 0.000GB
  -local 0.000GB **wetube DB는 비어있어 않보임**
  -> use wetube
  -switched to db wetube
  -> db
  -wetube(db이름만 있고 내부는 비어있음)
  -> db.createCollection("test")
  -{ "ok" : 1 }
  -> show collections
  -test
  -> db.test2.insertOne({name:"hoos", age:30})
- **컬렉션이 같이생성됌**
  -{
-        "acknowledged" : true,
-        "insertedId" : ObjectId("60291595bfa849980fc9c960")
  -}
  -> show collections
  -test
  -test2
  -> db.test2.find() -만든 DB 객체 값이 보여지게 됌

참고자료
https://javacpro.tistory.com/64 설치및환경변수
https://sanghn.tistory.com/2 설치및환경변수
https://jsonobject.tistory.com/484 기본개념및사용법
https://www.youtube.com/watch?v=zM1u6Vf64qY 설치및간단사용법
https://www.zerocho.com/category/MongoDB/post/59a1870210b942001853e250 스키마
https://dhddl.tistory.com/173 with dotenv(환경설정파일숨기기)
