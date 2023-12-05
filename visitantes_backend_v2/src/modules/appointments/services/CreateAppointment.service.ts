import { inject, injectable } from "tsyringe";
import IAppointmentsRepository from "../repository/IAppointmentsRepository";
import { IAppointments, ICreateAppointments } from "../interface/IAppointments";

@injectable()
export default class CreateAppointmentService {
  constructor(
    @inject("AppointmentRespository")
    private appointmentRepository: IAppointmentsRepository
  ) {}

  public async execute(data: ICreateAppointments): Promise<IAppointments> {
    return await this.appointmentRepository.CreateAppointment(data);
  }
}
