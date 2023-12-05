interface IVisitor {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface ICreateVisitor {
  name: string;
  email: string;
  phone: string;
}

interface IUpdateVisitor {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export { IVisitor, ICreateVisitor, IUpdateVisitor };
