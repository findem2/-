import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cookiePaser from "cookie-parser";
import multer from "multer";
import cors from "cors" ;
import path from "path";
import session from "express session";
import FileStore from "session-file-store";


dotenv.config();

const app = express();

const storage = multer.diskStorage({})

app.use(cors)
app.use(morgan("dev"))
app.use(cookiePaser)
app.use(session())

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
    console.log(app.get("port"), "server open");
});

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () =>{
    console.log(app.get("port"),"server open");
})

express morgan dotenv cookiepaser muleter