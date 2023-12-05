import { injectable, inject } from "tsyringe";
import { IAppointments } from "../interface/IAppointments";
import IAppointmentsRepository from "../repository/IAppointmentsRepository";

@injectable()
export default class IndexAppointmentByUser {
  constructor(
    @inject("AppointmentRespository")
    private appointmentRepository: IAppointmentsRepository
  ) {}

  public async execute(userId: number): Promise<IAppointments[] | null> {
    return await this.appointmentRepository.GetAppointmentByUser(userId);
  }
}
