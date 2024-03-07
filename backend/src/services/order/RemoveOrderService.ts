import { prismaClient } from '../../prisma';


export interface IOrderRequestProps{
  order_id: string
}

class RemoveOrderService {
  async execute({ order_id }: IOrderRequestProps){

    const order = await prismaClient.order.delete({
      where:{
        id: order_id,
      }
    });

    return order;
  }
}

export { RemoveOrderService };
