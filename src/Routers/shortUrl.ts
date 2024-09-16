import { create } from "domain";
import  express  from "express";
import { createUrl , getAllUrl, getUrl, deleteUrl, updateUrl} from "../controllers/shortUrl";
const Router = express.Router()


Router.post('/shorturl',createUrl)
Router.get('/shorturl',getAllUrl)
Router.get('/shorturl/:id',getUrl)
Router.patch('/shorturl',updateUrl)
Router.delete('/shorturl/:id',deleteUrl)

export  default Router