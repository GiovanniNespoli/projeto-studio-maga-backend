import { inject, injectable } from "tsyringe";
import { ApiError } from "../../../utils/api-errors";
import IUsersRepository from "../repository/IUsersRepository";
import { IUpdateUser, IUsers } from "../interface/IUsers";

@injectable()
export default class UpdateUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository
  ) {}

  public async execute(data: IUpdateUser): Promise<IUsers> {
    const findUser = await this.userRepository.GetUserById(data.id);

    if (!findUser) {
      throw new ApiError("O usuário não existe!", 404);
    }

    if (data.email) {
      const findUser = await this.userRepository.GetUserByEmail(data.email);

      if (findUser) {
        throw new ApiError("O email já existe!", 404);
      }
    }

    return await this.userRepository.UpdateUser(data);
  }
}
