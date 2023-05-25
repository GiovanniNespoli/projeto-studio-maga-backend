import {injectable, inject} from "tsyringe";
import AppError from '@shared/errors/AppError';

import User from "@modules/users/infra/typeorm/enitities/User";
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';

interface ICreateUserServiceRequest {
    email: string;
    password: string;
    name: string;
    phone: string;
    adress: string;
    user_type: string;
}

@injectable()
class CreateUserService {
    constructor(
        @inject('UsersRepository')
        private userRepository: IUsersRepository,

        @inject('HashProvider')
        private hashProvider: IHashProvider,
        
    ) { }

    public async execute({ email, password, name, phone, adress, user_type, }:ICreateUserServiceRequest): Promise<User> {
        
        const isEmailUsed = await this.userRepository.findByEmail(email);
        if (isEmailUsed) {
            throw new AppError('Esse email já está em uso', 401);
        }

        // const userType = await this.teamRepository.findById(user_type_id);
        // if (!userType) {
        //     throw new AppError('Esse time não existe!', 401);
        // }

        const hashedPassword = await this.hashProvider.generateHash(password);

        const user = await this.userRepository.create({
            password: hashedPassword,
            email,
            name,
            phone,
            adress,
            user_type,
        });

        return user;
    }
}

export default CreateUserService;

