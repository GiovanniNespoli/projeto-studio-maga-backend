import { Router } from "express";
import AppointmentController from "../controllers/Appointment.controllers";

const appointmentsRoute = Router();
const appointmentsController = new AppointmentController();

appointmentsRoute.get("/", appointmentsController.Index);
appointmentsRoute.get("/user/:userId", appointmentsController.IndexByUser);
appointmentsRoute.get("/:date", appointmentsController.IndexByDate);
appointmentsRoute.post("/", appointmentsController.Create);
appointmentsRoute.delete("/:id", appointmentsController.Delete);
appointmentsRoute.put("/:id", appointmentsController.Update);

export default appointmentsRoute;
