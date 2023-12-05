import { Router } from "express";
import visitorRouter from "../modules/visitors/routes/visitors.routes";

const routes = Router();

routes.use("/api/visitors", visitorRouter);

export default routes;
