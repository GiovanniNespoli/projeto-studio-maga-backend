interface IAppointments {
  id: number;
  service: string;
  date: string;
  value: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

interface ICreateAppointments {
  service: string;
  date: string;
  value: string;
  userId: number;
}

interface IUpdateAppointments {
  id: number;
  service?: string;
  date?: string;
  value?: string;
}

export { IAppointments, ICreateAppointments, IUpdateAppointments };
