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

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});
const uploadRouter = (name) => multer({ storage }).array(name);

app.use(cors({ origin: "http://localhost" , credentials: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("test"));
app.post("*/write", uploadRouter("img"));

app.use(
  session({
      resave: true,
      saveUninitialized: false,
      name: "user-session", 
      store: new (FileStore(session))({
          reapInterval: 10, 
          path: "./test-session",
      }),
      cookie: {
          maxAge: 60 * 1000, 
      },
  })
);

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
    console.log(app.get("port"), "server open");
});