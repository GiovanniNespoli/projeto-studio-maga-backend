import { inject, injectable } from "tsyringe";
import IVisitorsRepository from "../repository/IVisitors.repository";
import { ICreateVisitor, IVisitor } from "../interface/IVisitor";
import { ApiError } from "../../../utils/api-errors";

@injectable()
export default class CreateVisitorService {
  constructor(
    @inject("VisitorRepository")
    private visitoryRepository: IVisitorsRepository
  ) {}

  public async execute({
    name,
    email,
    phone,
  }: ICreateVisitor): Promise<IVisitor> {
    if (email) {
      const findVisitor = await this.visitoryRepository.FindVisitorByEmail(
        email
      );

      if (findVisitor) {
        throw new ApiError("O email cadastrado já existe!", 404);
      }
    }

    return await this.visitoryRepository.CreateVisitor({
      name,
      email,
      phone,
    });
  }
}
