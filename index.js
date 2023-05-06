import express from "express";
import routes from "./src/routes/index";
import bodyParser from "body-parser";

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
routes(app);

const port = 5001;

app.listen(port, () => {
  console.log("App is now running at port ", port);
});
