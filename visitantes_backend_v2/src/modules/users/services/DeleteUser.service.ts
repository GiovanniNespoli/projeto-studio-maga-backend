import { inject, injectable } from "tsyringe";
import IUsersRepository from "../repository/IUsersRepository";
import { IUsers } from "../interface/IUsers";

@injectable()
export default class DeleteUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository
  ) {}

  public async execute(id: number): Promise<IUsers> {
    return await this.userRepository.DeleteUser(id);
  }
}
