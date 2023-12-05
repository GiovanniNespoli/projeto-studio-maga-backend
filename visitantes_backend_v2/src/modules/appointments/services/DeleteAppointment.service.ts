import { injectable, inject } from "tsyringe";
import { IAppointments } from "../interface/IAppointments";
import IAppointmentsRepository from "../repository/IAppointmentsRepository";

@injectable()
export default class DeleteAppointmentService {
  constructor(
    @inject("AppointmentRespository")
    private appointmentRepository: IAppointmentsRepository
  ) {}

  public async execute(id: number): Promise<IAppointments> {
    return await this.appointmentRepository.DeleteAppointment(id);
  }
}
