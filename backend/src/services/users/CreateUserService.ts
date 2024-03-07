import { prismaClient } from '../../prisma';
import { hash } from 'bcryptjs';

export interface IUserInterfaceProps {
  name: string;
  email: string;
  password: string;
}



export class CreateUserService{
  async execute({ name, email, password }: IUserInterfaceProps){
    const passwordHash = await hash(password, 8);
    // Verificar se enviou o email
    if(!email) {
      throw new Error('Email incorreto!');
    }

    // Verificar se o email já esta cadastrado
    const userAlreadyExists = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    });

    if (userAlreadyExists){
      throw new Error('Email já existe!');
    }

    const user = await prismaClient.user.create({
      data:{
        name: name,
        email: email,
        password: passwordHash,
      },
      select:{
        id: true,
        name: true,
        email: true,
      }
    });

    return user;
  }
}
