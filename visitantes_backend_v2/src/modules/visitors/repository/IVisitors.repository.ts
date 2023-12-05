import {
  IUpdateVisitor,
  ICreateVisitor,
  IVisitor,
} from "../interface/IVisitor";

export default interface IVisitorsRepository {
  GetAllVisitors(): Promise<IVisitor[]>;
  CreateVisitor(data: ICreateVisitor): Promise<IVisitor>;
  DeleteVisitor(id: number): Promise<IVisitor>;
  UpdateVisitor(data: IUpdateVisitor): Promise<IVisitor>;
  FindVisitorById(id: number): Promise<IVisitor | null>;
  FindVisitorByEmail(email: string): Promise<IVisitor | null>;
  GetAllVisitorsPerDay(): Promise<IVisitor[]>;
  GetAllVisitorsPerMonth(): Promise<IVisitor[]>;
}
