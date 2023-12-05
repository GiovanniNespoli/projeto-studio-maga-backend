import { inject, injectable } from "tsyringe";
import IVisitorsRepository from "../repository/IVisitors.repository";
import { IUpdateVisitor, IVisitor } from "../interface/IVisitor";
import { ApiError } from "../../../utils/api-errors";

@injectable()
export default class UpdateVisitorService {
  constructor(
    @inject("VisitorRepository")
    private visitoryRepository: IVisitorsRepository
  ) {}

  public async execute({
    id,
    name,
    email,
    phone,
  }: IUpdateVisitor): Promise<IVisitor> {
    const findVisitor = await this.visitoryRepository.FindVisitorById(id);

    if (!findVisitor) {
      throw new ApiError("O Visitante não existe", 404);
    }

    return await this.visitoryRepository.UpdateVisitor({
      id,
      email,
      name,
      phone,
    });
  }
}
