import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateUserService from '@modules/users/services/users/CreateUserService';


export default class UsersController {
    // public async index(req: Request, res: Response): Promise<Response> {
    //     const indexUsersService = container.resolve(IndexUsersService);

    //     const users = await indexUsersService.execute();

    //     return res.json(classToClass(users));
    //   }

    //   public async show(req: Request, res: Response): Promise<Response> {
    //     const { user_id } = req.params;

    //     const showUserService = container.resolve(ShowUserService);

    //     const user = await showUserService.execute({ user_id });

    //     return res.json(classToClass(user));
    //   }

    public async create(req: Request, res: Response): Promise<Response> {
        const { name, email, password, phone, adress, user_type } = req.body;

        const createUserService = container.resolve(CreateUserService);

        const user = await createUserService.execute({
            name,
            password,
            email,
            phone,
            adress,
            user_type,
        });

        return res.json((user));
    }

    //   public async update(req: Request, res: Response): Promise<Response> {
    //     const user_id = req.user.id;
    //     const { email, name, oldPassword, password, last_name, team_id, nif } = req.body;

    //     const updateUserService = container.resolve(UpdateUserService);

    //     const updateUser = await updateUserService.execute({
    //       user_id,
    //       email,
    //       name,
    //       last_name,
    //       team_id,
    //       oldPassword,
    //       password,
    //       nif,
    //     });

    //     return res.json(classToClass(updateUser));
    //   }

    //   public async delete(req: Request, res: Response): Promise<Response> {
    //     const { user_id } = req.params;
    //     const deleteUserService = container.resolve(DeleteUserService);

    //     const deleteUser = await deleteUserService.execute({ user_id });

    //     return res.json(classToClass(deleteUser));
    //   }
}