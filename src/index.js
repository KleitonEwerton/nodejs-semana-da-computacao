import * as dotenv from 'dotenv';
dotenv.config();
import express from "express";
import routes  from './routes.js';

const app = express();

app.use(routes);

app.get("/", (req, res)=>{

    res.send("<html><head><style>*{margin:0;padding:0;background-color:#111; color:#fff}</style></head><div style='display:flex; text-align:center;justify-content:center; align-items:center;min-height:99vh;'> Hello World </div></html>")

});

const port = process.env.PORT || 8080

app.listen(3000, ()=>{
    console.log("Server listening on port " + port)
})