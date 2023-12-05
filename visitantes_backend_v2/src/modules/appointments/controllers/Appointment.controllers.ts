import { Response, Request } from "express";
import { container } from "tsyringe";
import CreateAppointmentService from "../services/CreateAppointment.service";
import DeleteAppointmentService from "../services/DeleteAppointment.service";
import IndexAppointmentService from "../services/IndexAppointment.service";
import IndexAppointmentByDate from "../services/IndexAppointmentByDate.service";
import UpdateAppointmentByDate from "../services/UpdateAppointment.service";
import IndexAppointmentByUser from "../services/IndexAppointmentByUser.service";

export default class AppointmentController {
  public async Create(req: Request, res: Response): Promise<Response> {
    const { service, date, value, userId } = req.body;

    const createAppointment = container.resolve(CreateAppointmentService);
    const create = await createAppointment.execute({
      date,
      service,
      userId,
      value,
    });

    return res.status(201).json(create);
  }

  public async Delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteAppointment = container.resolve(DeleteAppointmentService);
    const deleteService = await deleteAppointment.execute(parseInt(id));

    return res.status(201).json(deleteService);
  }

  public async Index(req: Request, res: Response): Promise<Response> {
    const indexAppointment = container.resolve(IndexAppointmentService);
    const index = await indexAppointment.execute();

    return res.status(201).json(index);
  }

  public async IndexByDate(req: Request, res: Response): Promise<Response> {
    const { date } = req.params;

    const indexByDateAppointment = container.resolve(IndexAppointmentByDate);
    const index = await indexByDateAppointment.execute(new Date(date));

    return res.status(201).json(index);
  }

  public async IndexByUser(req: Request, res: Response): Promise<Response> {
    const { userId } = req.params;

    const indexByUserIdAppointment = container.resolve(IndexAppointmentByUser);
    const index = await indexByUserIdAppointment.execute(parseInt(userId));

    return res.status(201).json(index);
  }

  public async Update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { date, service, value } = req.body;

    const updateContainer = container.resolve(UpdateAppointmentByDate);
    const update = await updateContainer.execute({
      id: parseInt(id),
      date,
      service,
      value,
    });

    return res.status(201).json(update);
  }
}
