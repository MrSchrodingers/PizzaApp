import { prismaClient } from '../../prisma';
import { IOrderRequestProps } from './RemoveOrderService';

class FinishOrderService{
  async execute({ order_id }: IOrderRequestProps){

    const order = await prismaClient.order.update({
      where:{
        id: order_id
      },
      data:{
        status: true
      }
    });
    return order;
  }
}

export { FinishOrderService };
