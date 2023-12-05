import { injectable, inject } from "tsyringe";
import IVisitorsRepository from "../repository/IVisitors.repository";
import { IVisitor } from "../interface/IVisitor";

@injectable()
export default class IndexTotalMonthVisitorsService {
  constructor(
    @inject("VisitorRepository")
    private visitoryRepository: IVisitorsRepository
  ) {}
  public async execute(): Promise<number> {
    const totalVisitorsPerMonth =
      await this.visitoryRepository.GetAllVisitorsPerMonth();

    return totalVisitorsPerMonth.length;
  }
}
