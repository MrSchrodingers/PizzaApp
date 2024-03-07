import { prismaClient } from '../../prisma';

interface ICategoryRequestProps {
  name: string;
}

class CreateCategoryService{
  async execute({ name }: ICategoryRequestProps){

    if ( name === '' ){
      throw new Error('Invalid Category Name');
    }

    const category = await prismaClient.category.create({
      data:{
        name: name
      },
      select:{
        id: true,
        name: true,
      }
    });

    return category;
  }
}


export { CreateCategoryService };
