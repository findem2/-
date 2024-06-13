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

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use

app.listen(app.get("port"), () => {
    console.log(app.get("port"), "server open");
  });  