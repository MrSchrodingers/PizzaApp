import { prismaClient } from '../../prisma';
import { IOrderRequestProps } from './RemoveOrderService';

class SendOrderService{
  async execute({ order_id }: IOrderRequestProps){

    const orders = await prismaClient.order.update({
      where:{
        id: order_id
      },
      data:{
        draft: false
      }
    });

    return orders;
  }
}

export { SendOrderService };
