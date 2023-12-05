import { PrismaClient } from "@prisma/client";
import { IUsers, ICreateUser, IUpdateUser } from "../interface/IUsers";
import IUsersRepository from "../repository/IUsersRepository";

const prisma = new PrismaClient();

export default class UserPrisma implements IUsersRepository {
  public async LoginUser(email: string, password: string): Promise<IUsers | null> {
    return await prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });
  }

  public async GetUserByEmail(email: string): Promise<IUsers | null> {
    return await prisma.user.findFirst({ where: { email } });
  }

  public async GetUsers(): Promise<IUsers[]> {
    return await prisma.user.findMany();
  }
  public async GetUserById(id: number): Promise<IUsers | null> {
    return await prisma.user.findFirst({ where: { id } });
  }
  public async CreateUser(data: ICreateUser): Promise<IUsers> {
    return await prisma.user.create({ data });
  }
  public async UpdateUser({
    id,
    email,
    name,
    phone,
  }: IUpdateUser): Promise<IUsers> {
    return await prisma.user.update({
      where: {
        id,
      },
      data: {
        email,
        name,
        phone,
      },
    });
  }
  public async DeleteUser(id: number): Promise<IUsers> {
    return await prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
