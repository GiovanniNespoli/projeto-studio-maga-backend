import { getRepository, Repository } from 'typeorm';

import IUserRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

import User from '../enitities/User';

class UserRepository implements IUserRepository {

    private ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(User);
    }

    public async findById(id: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOne({
            where: { id },
        });

        if (user === null) {
            return undefined;
        }

        return user;
    }

    public async findAllUsers(): Promise<User[] | undefined> {
        const users = await this.ormRepository.find()
        return users;
    }

    public async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOne({
            where: { email }
        })

        if (user === null) {
            return undefined;
          }
        
        return user;
    }

    public async create(data: ICreateUserDTO): Promise<User> {
        const newUser = await this.ormRepository.create(data)
        await this.ormRepository.save(newUser);
        return newUser;
    }

    public async save(user: User): Promise<User> {
        return this.ormRepository.save(user);
    }
    public async delete(user: User): Promise<User> {
        return this.ormRepository.remove(user)
    }
}

export default UserRepository;


