// 검색해서 갖고오기 chat gpt x
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import multer from "multer";
import cors from "cors"; 
import session from "express-session";
import FileStore from "session-file-store";

// .env 파일 읽은 후 내용을 process.env 객체에 포함
dotenv.config();

// app 인스턴스 생성
const app = express();

// 멀터 저장소 설정
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads"); // uploads 폴더
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}_${file.originalname}`); // 파일 이름 설정
  },
});
// array인 이유 설명
const uploadRouter = (name) => multer({ storage }).array(name);
// 단일 파일말고 다중파일로 업로드 할수도 있어서

// 각각 어떤 역할 하는지 설명
app.set("port", process.env.PORT || 3000);
// app.set은 서버환경을 설정하는 메소드
// env = 서버의 모드를 설정한다 / port 포트의 번호를 설정한다.
app.use(cors({ origin: "http://localhost" , credentials: true }));
// app.use는 미들웨어 에서 사용한다
// origin: "http://localhost" -> 출처를 localhost로 허용
// credential: true -> 사용자에 필요한 리소스 접근 허용
app.use(morgan("dev"));
// 개발환경에서 설정중임.
// combined, common, short, tiny를 넣을수 있고 combined는 배포 환경에서 사용
app.use(express.json());
// JSON 형태의 요청 body를 파싱
app.use(express.urlencoded({ extended: false }));
// querystring 모듈을 사용하여 쿼리스트링을 해석
app.use(cookieParser("test"));
// 매개변수에 비밀키 "test"
app.use(
  session({
    resave: true,
    // session에 아무런 변경사항이 없을 시에도 저장,매 request 마다 세션을 계속 다시 저장하는 것
    saveUninitialized: false,
    //
    name: "user-session",
    secret:"test",
    // 비밀키 "test"
    store: new (FileStore(session))({
      reapInterval: 10,
      path: "./test-session",
      // ./test-session 경로에 저장되는 session들이 만료가 되면 10초마다 삭제
    }),
    cookie: {
      maxAge: 60 * 1000,
      // 쿠키가 만료까지 걸리는 시간 60초
    },
  })
);
// 여기까지 각각 어떤 역할하는지 설명

// FrontEnd에서 파일을 업로그하기 위해 어떻게 적어야하는지 q_index.html에 작성
// app.post("*/write", uploadRouter("img"));
app.use(uploadRouter("img"));

// 어떤 역할을 하며 왜 listen인지 설명
// 요청을 받아야해서
// port를 받아서 열고 콘솔창에 받은 port + server open로 띄워준다.
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server open");
});
