//myPackage가 node의 모듈인것처럼 사용 (npm 설치했다는 가정)

//myPackage.d.ts에 타입을 정의 -> 타입스크립트가 init의 타입에 대해 알고 있기 때문에 더이상 에러 없음.
import { init, exit } from "myPackage";

init({
  url:'true'
})

exit(2)

//ts가 d.ts파일을 읽어서 타입을 인지
localStorage