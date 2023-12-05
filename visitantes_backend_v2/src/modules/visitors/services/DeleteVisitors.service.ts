import { inject, injectable } from "tsyringe";
import IVisitorsRepository from "../repository/IVisitors.repository";
import { IVisitor } from "../interface/IVisitor";
import { ApiError } from "../../../utils/api-errors";

@injectable()
export default class DeleteVisitorService {
  constructor(
    @inject("VisitorRepository")
    private visitoryRepository: IVisitorsRepository
  ) {}

  public async execute(id: number): Promise<IVisitor> {
    const findVisitor = await this.visitoryRepository.FindVisitorById(id);

    if (!findVisitor) {
      throw new ApiError("O Visitante não existe", 404);
    }

    return await this.visitoryRepository.DeleteVisitor(id);
  }
}
