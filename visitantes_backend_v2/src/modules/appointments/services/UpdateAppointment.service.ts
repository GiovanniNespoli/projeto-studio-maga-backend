import { injectable, inject } from "tsyringe";
import { IAppointments, IUpdateAppointments } from "../interface/IAppointments";
import IAppointmentsRepository from "../repository/IAppointmentsRepository";

@injectable()
export default class UpdateAppointmentByDate {
  constructor(
    @inject("AppointmentRespository")
    private appointmentRepository: IAppointmentsRepository
  ) {}

  public async execute(date: IUpdateAppointments): Promise<IAppointments> {
    return await this.appointmentRepository.UpdateAppointment(date);
  }
}
