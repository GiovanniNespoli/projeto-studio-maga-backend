import { Response, Request } from "express";
import { container } from "tsyringe";
import IndexVisitorsService from "../services/IndexVisitors.service";
import CreateVisitorService from "../services/CreateVisitors.service";
import DeleteVisitorService from "../services/DeleteVisitors.service";
import UpdateVisitorService from "../services/UpdateVisitors.service";
import IndexTodayVisitors from "../services/IndexTodayVisitors.service";
import IndexTotalMonthVisitorsService from "../services/IndexTotalMonthVisitors.service";
import IndexVisitorsPerMonthService from "../services/IndexVisitorsPerMonth.service";

export default class VisitorsController {
  public async Index(request: Request, response: Response): Promise<Response> {
    const indexVisitor = container.resolve(IndexVisitorsService);
    const index = await indexVisitor.execute();

    return response.status(200).json(index);
  }

  public async IndexPerDay(
    request: Request,
    response: Response
  ): Promise<Response> {
    const indexVisitor = container.resolve(IndexTodayVisitors);
    const index = await indexVisitor.execute();

    return response.status(200).json(index);
  }

  public async IndexPerMonth(
    request: Request,
    response: Response
  ): Promise<Response> {
    const indexVisitor = container.resolve(IndexTotalMonthVisitorsService);
    const index = await indexVisitor.execute();

    return response.status(200).json(index);
  }

  public async IndexVisitorsPerMonth(
    request: Request,
    response: Response
  ): Promise<Response> {
    const indexVisitor = container.resolve(IndexVisitorsPerMonthService);
    const index = await indexVisitor.execute();

    return response.status(200).json(index);
  }

  public async Create(request: Request, response: Response): Promise<Response> {
    const { name, email, phone } = request.body;

    const createVisitor = container.resolve(CreateVisitorService);
    const create = await createVisitor.execute({
      name,
      email,
      phone,
    });

    console.log(create);

    return response.status(201).json(create);
  }

  public async Delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteVisitor = container.resolve(DeleteVisitorService);
    const index = await deleteVisitor.execute(parseInt(id));

    return response.status(200).json(index);
  }

  public async Update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email, phone } = request.body;

    const updateVisitor = container.resolve(UpdateVisitorService);
    const update = await updateVisitor.execute({
      id: parseInt(id),
      name,
      email,
      phone,
    });

    console.log(update);

    return response.status(201).json(update);
  }
}
