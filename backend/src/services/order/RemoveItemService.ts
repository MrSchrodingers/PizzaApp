import { prismaClient } from '../../prisma';


interface IItemRequestProps{
  item_id: string;
}

class RemoveItemService {
  async execute({ item_id }: IItemRequestProps){

    const order = await prismaClient.item.delete({
      where:{
        id: item_id,
      }
    });

    return order;
  }
}

export { RemoveItemService };
