import { inject, injectable } from "tsyringe";
import IUsersRepository from "../repository/IUsersRepository";
import { IUsers } from "../interface/IUsers";

@injectable()
export default class IndexUsersService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository
  ) {}

  public async execute(): Promise<IUsers[]> {
    return await this.userRepository.GetUsers();
  }
}
