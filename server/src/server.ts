import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import shortUrl from "./Routers/shortUrl"
// import db from './'
import connectDb from './config/dbconfig';
dotenv.config();
connectDb()
const port = process.env.PORT || 5001
console.log(process.env.PORT)

const app = express();
app.use(express.json())
app.use(cors({
    origin:"https://url-shortner-frontend-1ou1.onrender.com",
    credentials:true
}))
app.use(express.urlencoded({extended:true}))
// const shortUrl = require('./Routers/shortUrl')
app.use('/api/', shortUrl)

app.listen(port, ()=> console.log("app is listening to port"))