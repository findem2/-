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
      name: "user-session", 
      store: new (FileStore(session))({
          reapInterval: 10, 
          path: "./test-session",
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