import express from "express"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import session from "express-session"
import multer from "multer"
import cors from "cors"
import dotenv from "dotenv"
import fileStore from "session-file-store"

config(dotenv)

get.post(express("PORT", "server open process" || 3000))

app.use(morgan("dev"))
app.use(cors())
app.use(session)
app.use(cookieParser(
    
    secret:"test"
    path:
    maxage: 60 * 1000
))
app.use(fileStore

    multer

)

app.listen(app.get("PORT")) => {
    console.log("서버가 열렸다")
}
