import { prismaClient } from '../../prisma';


interface IProductRequestProps {
  category_id: string
}

class ListByCategoryService{
  async execute({ category_id }: IProductRequestProps){
    const findByCategory = await prismaClient.product.findMany({
      where:{
        category_id: category_id,
      }
    });

    return findByCategory;
  }
}

export { ListByCategoryService };
