import { Router } from "express";
import UserControllers from "../controllers/User.controllers";

const userControler = Router();
const userControllers = new UserControllers();

userControler.post("/", userControllers.Create);
userControler.post("/auth", userControllers.Login);
userControler.get("/", userControllers.Index);
userControler.delete("/:id", userControllers.Delete);
userControler.put("/update/:id", userControllers.Update);

export default userControler;
