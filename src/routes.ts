import { Router } from "express";

const routes = Router();

routes.get("/", (req: any, res: any) => {
  res.send(
    "<html><head><style>*{margin:0;padding:0;background-color:#111; color:#fff}</style></head><div style='display:flex; text-align:center;justify-content:center; align-items:center;min-height:99vh;'> Hello World </div></html>"
  );
});

routes.get("/home", (req: any, res: any) => {
  res.send(
    "<html><head><style>*{margin:0;padding:0;background-color:#111; color:#fff; text-transform:uppercase;}</style></head><div style='display:flex; text-align:center;justify-content:center; align-items:center;min-height:99vh;'> Home Page </div></html>"
  );
});

routes.get('/json', (req:any, res:any) => {

    res.status(200).json({'message': 'Success!'})

})

routes.get('/anchor', (req:any, res:any)=>{

    res.render('anchor', {
        anchor:"Anchor PAGES",
        anchors:['HP 1','HP 2', 'HP 3', 'HP 4']
    })

})

export default routes;
