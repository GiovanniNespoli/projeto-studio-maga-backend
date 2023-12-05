import { PrismaClient } from "@prisma/client";
import IAppointmentsRepository from "../repository/IAppointmentsRepository";
import {
  IAppointments,
  ICreateAppointments,
  IUpdateAppointments,
} from "../interface/IAppointments";
import { addDays, format } from "date-fns";

const prisma = new PrismaClient();

export default class AppointmentsPrisma implements IAppointmentsRepository {
  public async GetAppointmentByUser(
    userId: number
  ): Promise<IAppointments[] | null> {
    return await prisma.appointment.findMany({
      where: {
        userId,
      },
    });
  }

  public async GetAppointments(): Promise<IAppointments[]> {
    return await prisma.appointment.findMany();
  }

  public async GetAppointmentByDate(
    date: Date
  ): Promise<IAppointments[] | null> {
    const formatedDate = format(date, "yyy-M-d");
    const sumDate = addDays(new Date(formatedDate), 1);

    return await prisma.appointment.findMany({
      where: {
        date: {
          lte: new Date(sumDate).toISOString(),
          gte: new Date(formatedDate).toISOString(),
        },
      },
    });
  }

  public async CreateAppointment({
    date,
    service,
    userId,
    value,
  }: ICreateAppointments): Promise<IAppointments> {
    return await prisma.appointment.create({
      data: {
        date,
        service,
        value,
        userId,
      },
    });
  }
  public async DeleteAppointment(id: number): Promise<IAppointments> {
    return await prisma.appointment.delete({ where: { id } });
  }
  public async UpdateAppointment(
    data: IUpdateAppointments
  ): Promise<IAppointments> {
    return await prisma.appointment.update({
      where: {
        id: data.id,
      },
      data,
    });
  }
}
