import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import routes from "./routes";

const app = express();
app.set("view engine", "ejs");

var options = {
  dotfiles: "ignore",
  etag: false,
  extensions: ["htm", "html"],
  index: false,
  maxAge: "1d",
  redirect: false,
  setHeaders: (res:any, path:any, stat:any)=> {
    res.set("x-timestamp", Date.now());
  },
};

app.use(express.static("public", options));

app.use(routes);

const port = process.env.PORT || 8080;

app.listen(3000, () => {
  console.log("Server listening on port " + port);
});
