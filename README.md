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

<DB 연결>
https://javacpro.tistory.com/64 설치및환경변수
https://sanghn.tistory.com/2 설치및환경변수
https://jsonobject.tistory.com/484 기본개념및사용법
https://www.youtube.com/watch?v=zM1u6Vf64qY 설치및간단사용법
https://www.zerocho.com/category/MongoDB/post/59a1870210b942001853e250 스키마
https://dhddl.tistory.com/173 with dotenv(환경설정파일숨기기)

<webpack 설정>
https://velog.io/@public_danuel/process-env-on-node-js Node.js에서 환경변수 (dotenv, cross-env)
https://hardworkingcoder.wordpress.com/category/youtubeclone/ webpack-YoutubeClone
https://hanbi97.tistory.com/20 webpack- Youtube Clone Coding - Webpack
https://brunch.co.kr/@topherlee/87 웹팩 설정하기
https://www.zerocho.com/category/Webpack/post/58ac2d6f2e437800181c1657 mini-css-extract-plugin 웹팩5로 CSS와 기타 파일 번들링
https://webpack.js.org/loaders/postcss-loader/ postcss-loader | webpack

<facebook login>
https://kibua20.tistory.com/150 ngrok 설치
ngrok(ho깃헙인증으로 로그인했음-localhost:4040에서 status 확인가능) 으로 https 생성해야 함(facebook은 https가 있어서 등록됌) - 80 port 사용했음.
계속 Fail in serialize user into Session 나오는데 아마도, email을 페이스북에서 아직 public으로 열어주지 않아서 그런듯.
추후에 다시 확인해 보기로 함.

**해결해야될 문제점**

1. <githup login>
   passport로 이미 id, email 만든 경우 - 같은 email로 github 로그인시 githubId는 추가로 DB에 잘 저장하나, avatarUrl은 추가로 DB에 저장 못함(다른 clone도 못가져오는것 확인했음.)
2. github에서 가져온 이미지 경로는 useDetail 화면에서 표시않돼고 깨짐.
3. 질문 : videoController에서는 \_id를 3회를 사용했으나,
   userController에서는 1회도 않씀.
   videoController 안에서도 쓰는 경우와 않쓰는 경우의 차이점.
4. 질문 : userRouter 안의 Router의 순서를 바꾸자 에러가 났다. 내용은 똑같은데 이유를 알 수가 없다.
   (Edit Profile 과 Change Password 에서 그렇다.)
5. /me 화면(Profile)에서 내가 올린 동영상이 제대로 표시 않돼고 있다.
6. videoPlayer.js에서 muted
   비디오에 포함되어 있는 오디오의 기본 설정을 나타내는 부울 속성입니다. 설정하면 오디오가 나오지 않습니다. 기본 값은 false이며 이는 비디오가 재생되면 오디오도 같이 재생됨을 의미합니다.---
   function handleVolumeClick() {
   if (videoPlayer.muted) {
   videoPlayer.muted = false;
   이해 못하고 있음.
7. videoPlayer.scss 에서 가상요소선택자 ::-webkit-slider-thumb 작동돼지 않고 있음.

Replace Autoprefixer browsers option to Browserslist config.
Use browserslist key in package.json or .browserslistrc file.

Using browsers option can cause errors. Browserslist config can
be used for Babel, Autoprefixer, postcss-normalize and other tools.

If you really need to use option, rename it to overrideBrowserslist.

Learn more at:
https://github.com/browserslist/browserslist#readme
https://twitter.com/browserslist

**실수 노트**
input 태그에서 코마 쓰면 않돼는 경우 - videoPlayer.pug
input.videoPlayer**volume#jsVolume(type="range", min="0", max="1", value="0.5", step="0.1") -- 잘못됌
input.videoPlayer**volume#jsVolume(type="range", min="0" max="1" value="0.5" step="0.1") -- OK
