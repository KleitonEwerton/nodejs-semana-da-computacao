import { Router } from "express";

const routes = Router();

routes.get('/home', (req,res)=>{

    res.send( "<html><head><style>*{margin:0;padding:0;background-color:#111; color:#fff; text-transform:uppercase;}</style></head><div style='display:flex; text-align:center;justify-content:center; align-items:center;min-height:99vh;'> Home Page </div></html>");

});

export default routes;

