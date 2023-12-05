import { inject, injectable } from "tsyringe";
import { ApiError } from "../../../utils/api-errors";
import IUsersRepository from "../repository/IUsersRepository";
import { ICreateUser, IUsers } from "../interface/IUsers";

@injectable()
export default class CreateUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository
  ) {}

  public async execute({
    name,
    email,
    phone,
    password,
  }: ICreateUser): Promise<IUsers> {
    if (email) {
      const findUser = await this.userRepository.GetUserByEmail(email);

      if (findUser) {
        throw new ApiError("O email cadastrado já existe!", 404);
      }
    }

    return await this.userRepository.CreateUser({
      password,
      name,
      email,
      phone,
    });
  }
}
