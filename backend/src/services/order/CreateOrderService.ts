import { prismaClient } from '../../prisma';

interface IOrderRequestProps {
  table: number,
  name: string,
}

class CreateOrderService{
  async execute({ name, table }: IOrderRequestProps){

    const order = await prismaClient.order.create({
      data:{
        table: table,
        name: name
      }
    });

    return order;
  }
}

export { CreateOrderService };
