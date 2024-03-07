import { Request, Response } from 'express';
import { DetailOrderService } from '../../services';


export class DatailOrderController {
  async handle(req: Request, res: Response){
    const order_id = req.query.order_id as string;

    const detailOrder = new DetailOrderService();
    const order = await detailOrder.execute({
      order_id
    });

    return res.json(order);
  }
}
