import "reflect-metadata";
import "express-async-errors";
import "./config/index";
import express, { Application } from "express";
import cors from "cors";
import routes from "./routes";
import { errorMiddleware } from "./middlewares/error";

const app: Application = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
