import { PrismaClient } from "@prisma/client";
import IVisitorsRepository from "../repository/IVisitors.repository";
import {
  IUpdateVisitor,
  ICreateVisitor,
  IVisitor,
} from "../interface/IVisitor";
import {
  addDays,
  format,
  lastDayOfMonth,
  setHours,
  startOfMonth,
} from "date-fns";

const prisma = new PrismaClient();

export default class VisitorPrisma implements IVisitorsRepository {
  public async GetAllVisitorsPerMonth(): Promise<IVisitor[]> {
    const todayDate = new Date();

    const firstDay = startOfMonth(todayDate);
    const lastDay = lastDayOfMonth(todayDate);

    const formatedFirstDay = setHours(firstDay, -3);
    const formatedLastDay = setHours(lastDay, 21);

    return await prisma.visitors.findMany({
      where: {
        createdAt: {
          lte: new Date(formatedLastDay).toISOString(),
          gte: new Date(formatedFirstDay).toISOString(),
        },
      },
    });
  }

  public async GetAllVisitorsPerDay(): Promise<IVisitor[]> {
    const todayDate = new Date();

    const formatedDate = format(todayDate, "yyy-M-d");
    const sumDate = addDays(new Date(formatedDate), 1);

    return await prisma.visitors.findMany({
      where: {
        createdAt: {
          lte: new Date(sumDate).toISOString(),
          gte: new Date(formatedDate).toISOString(),
        },
      },
    });
  }

  public async FindVisitorByEmail(email: string): Promise<IVisitor | null> {
    return await prisma.visitors.findFirst({
      where: {
        email,
      },
    });
  }

  public async GetAllVisitors(): Promise<IVisitor[]> {
    return await prisma.visitors.findMany();
  }

  public async CreateVisitor({
    email,
    name,
    phone,
  }: ICreateVisitor): Promise<IVisitor> {
    return await prisma.visitors.create({
      data: {
        name,
        email,
        phone,
      },
    });
  }

  public async DeleteVisitor(id: number): Promise<IVisitor> {
    return await prisma.visitors.delete({
      where: {
        id,
      },
    });
  }

  public async UpdateVisitor({
    id,
    email,
    name,
    phone,
  }: IUpdateVisitor): Promise<IVisitor> {
    return await prisma.visitors.update({
      data: {
        name,
        phone,
        email,
      },
      where: {
        id,
      },
    });
  }

  public async FindVisitorById(id: number): Promise<IVisitor | null> {
    return await prisma.visitors.findFirst({
      where: {
        id,
      },
    });
  }
}
