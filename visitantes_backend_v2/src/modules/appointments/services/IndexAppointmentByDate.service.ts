import { injectable, inject } from "tsyringe";
import { IAppointments } from "../interface/IAppointments";
import IAppointmentsRepository from "../repository/IAppointmentsRepository";

@injectable()
export default class IndexAppointmentByDate {
  constructor(
    @inject("AppointmentRespository")
    private appointmentRepository: IAppointmentsRepository
  ) {}

  public async execute(date: Date): Promise<IAppointments[] | null> {
    return await this.appointmentRepository.GetAppointmentByDate(date);
  }
}
