import {
  IAppointments,
  ICreateAppointments,
  IUpdateAppointments,
} from "../interface/IAppointments";

export default interface IAppointmentsRepository {
  GetAppointments(): Promise<IAppointments[]>;
  GetAppointmentByDate(date: Date): Promise<IAppointments[] | null>;
  GetAppointmentByUser(userId: number): Promise<IAppointments[] | null>;
  CreateAppointment(data: ICreateAppointments): Promise<IAppointments>;
  DeleteAppointment(id: number): Promise<IAppointments>;
  UpdateAppointment(data: IUpdateAppointments): Promise<IAppointments>;
}
