// 아래의 라이브러리를 설치하고 해당 라이브러리를 활용하는 server.js를 완성하시오.

import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import multer from "multer";
import cors from "cors"; 
import path from "path";
import session from "express-session";
import FileStore from "session-file-store";

dotenv.config();

const app = express();


app.use(cors({ origin: "http://localhost" , credentials: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET || "aws"));

app.use(
  session({
      resave: true,
      saveUninitialized: false,
      secret: "test",
      name: "user-session", // connect.sid
      store: new FileStore({
          reapInterval: 10,// 10초뒤에 파일을 지운다
          path: "./test-session"
      }),
      cookie: {
          maxAge: 5 * 1000,
      },
  })
);

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
    console.log(app.get("port"), "server open");
  });  