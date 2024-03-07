import { prismaClient } from '../../prisma';

export interface IMenuRequestProps {
  name: string,
  price: string,
  description: string,
  banner: string,
  category_id: string,
}

class CreateProductService{
  async execute({ name, price, description, banner, category_id }: IMenuRequestProps){
    const product = await prismaClient.product.create({
      data:{
        name: name,
        price: price,
        banner: banner,
        description: description,
        category_id: category_id
      }
    });

    return product;
  }
}

export { CreateProductService };
