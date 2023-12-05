import { container } from "tsyringe";
import IVisitorsRepository from "../repository/IVisitors.repository";
import VisitorPrisma from "../prisma/visitors.prisma";

container.registerSingleton<IVisitorsRepository>(
  "VisitorRepository",
  VisitorPrisma
);
