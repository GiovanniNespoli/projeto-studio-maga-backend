import { injectable, inject } from "tsyringe";
import IVisitorsRepository from "../repository/IVisitors.repository";
import { IVisitor } from "../interface/IVisitor";

interface MonthlyData {
  month: string;
  value: number;
}

@injectable()
export default class IndexVisitorsPerMonthService {
  constructor(
    @inject("VisitorRepository")
    private visitoryRepository: IVisitorsRepository
  ) {}
  public async execute(): Promise<any> {
    const allVisitors  = await this.visitoryRepository.GetAllVisitors();

    function filterAndCountByMonth(users: IVisitor[]): MonthlyData[] {
      const dataByMonth: { [month: string]: number } = {};

      users.forEach((user) => {
        const month = new Date(user.createdAt).toLocaleString("default", {
          month: "long",
        });

        if (!dataByMonth[month]) {
          dataByMonth[month] = 0;
        }

        dataByMonth[month]++;
      });

      const result: MonthlyData[] = Object.keys(dataByMonth).map((month) => ({
        month,
        value: dataByMonth[month],
      }));

      // Ordenar por mês
      const sortedResult = result.sort((a, b) => {
        const monthsOrder = [
          "janeiro",
          "fevereiro",
          "março",
          "abril",
          "maio",
          "junho",
          "julho",
          "agosto",
          "setembro",
          "outubro",
          "novembro",
          "dezembro",
        ];

        return monthsOrder.indexOf(a.month) - monthsOrder.indexOf(b.month);
      });

      return sortedResult;
    }

    const result = filterAndCountByMonth(allVisitors);

    return result;
  }
}
