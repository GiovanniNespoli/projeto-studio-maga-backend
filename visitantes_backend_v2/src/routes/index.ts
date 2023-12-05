import { Router } from "express";
import usersRoute from "../modules/users/routes/users.routes";
import appointmentsRoute from "../modules/appointments/routes/Appointments.routes";

const routes = Router();

routes.use("/api/users", usersRoute);
routes.use("/api/appointment", appointmentsRoute);

export default routes;
