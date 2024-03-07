import { prismaClient } from '../../prisma';
import { IOrderRequestProps } from './RemoveOrderService';

class DetailOrderService{
  async execute({ order_id }: IOrderRequestProps){

    const orders = await prismaClient.item.findMany({
      where:{
        order_id: order_id
      },
      include:{
        product: true,
        order: true
      }
    });

    return orders;
  }
}

export { DetailOrderService };
