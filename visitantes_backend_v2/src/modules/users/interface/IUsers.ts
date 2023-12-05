interface IUsers {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ICreateUser {
  name: string;
  email: string;
  password: string;
  phone: string;
}

interface IUpdateUser {
  id: number;
  name?: string;
  email?: string;
  phone?: string;
}

export { IUsers, ICreateUser, IUpdateUser };
