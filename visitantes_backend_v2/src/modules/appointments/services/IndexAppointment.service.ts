import { inject, injectable } from "tsyringe";
import IAppointmentsRepository from "../repository/IAppointmentsRepository";
import { IAppointments } from "../interface/IAppointments";

@injectable()
export default class IndexAppointmentService {
  constructor(
    @inject("AppointmentRespository")
    private appointmentRepository: IAppointmentsRepository
  ) {}

  public async execute(): Promise<IAppointments[]> {
    return await this.appointmentRepository.GetAppointments();
  }
}
