import { ICreateUser, IUsers, IUpdateUser } from "../interface/IUsers";

export default interface IUsersRepository {
  GetUsers(): Promise<IUsers[]>;
  GetUserById(id: number): Promise<IUsers | null>;
  GetUserByEmail(email: string): Promise<IUsers | null>;
  CreateUser(data: ICreateUser): Promise<IUsers>;
  UpdateUser(data: IUpdateUser): Promise<IUsers>;
  DeleteUser(id: number): Promise<IUsers>;
  LoginUser(email: string, password: string): Promise<IUsers | null>;
}
