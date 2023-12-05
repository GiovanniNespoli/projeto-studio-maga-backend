import { container } from "tsyringe";
import IUsersRepository from "../modules/users/repository/IUsersRepository";
import UserPrisma from "../modules/users/prisma/User.prisma";
import IAppointmentsRepository from "../modules/appointments/repository/IAppointmentsRepository";
import AppointmentsPrisma from "../modules/appointments/prisma/Appointments.prisma";

container.registerSingleton<IUsersRepository>("UserRepository", UserPrisma);
container.registerSingleton<IAppointmentsRepository>(
  "AppointmentRespository",
  AppointmentsPrisma
);
