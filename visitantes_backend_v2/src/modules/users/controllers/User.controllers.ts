import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateUserService from "../services/CreateUser.service";
import UpdateUserService from "../services/UpdateUser.service";
import IndexUsersService from "../services/IndexUsers.service";
import DeleteUserService from "../services/DeleteUser.service";
import LoginUsersService from "../services/LoginUser.service";

export default class UserControllers {
  public async Create(req: Request, res: Response): Promise<Response> {
    const { name, email, password, phone } = req.body;

    const createUser = container.resolve(CreateUserService);
    const create = await createUser.execute({
      name,
      email,
      phone,
      password,
    });

    return res.status(201).json(create);
  }

  public async Update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    const updateUser = container.resolve(UpdateUserService);
    const update = await updateUser.execute({
      id: parseInt(id),
      name,
      email,
      phone,
    });

    return res.status(201).json(update);
  }

  public async Index(req: Request, res: Response): Promise<Response> {
    const indexUser = container.resolve(IndexUsersService);
    const index = await indexUser.execute();

    return res.status(201).json(index);
  }

  public async Delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteUser = container.resolve(DeleteUserService);
    const deleteService = await deleteUser.execute(parseInt(id));

    return res.status(201).json(deleteService);
  }

  public async Login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const loginUser = container.resolve(LoginUsersService);
    const login = await loginUser.execute(email, password);

    return res.status(201).json(login);
  }
}
