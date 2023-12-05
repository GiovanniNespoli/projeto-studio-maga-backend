import { inject, injectable } from "tsyringe";
import IUsersRepository from "../repository/IUsersRepository";
import { IUsers } from "../interface/IUsers";
import { ApiError } from "../../../utils/api-errors";

@injectable()
export default class LoginUsersService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository
  ) {}

  public async execute(email: string, password: string): Promise<IUsers> {
    const find = await this.userRepository.GetUserByEmail(email);

    if (!find) {
      throw new ApiError("Email não encontrado", 404);
    }

    const login = await this.userRepository.LoginUser(email, password);

    if (!login) {
      throw new ApiError("Email ou Senha incorretos", 400);
    }

    return login;
  }
}
