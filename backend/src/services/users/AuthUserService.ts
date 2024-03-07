import { prismaClient} from '../../prisma';
import { IUserInterfaceProps } from './CreateUserService';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import 'dotenv/config';


export class AuthUserService{
  async execute({ email, password }:Omit<IUserInterfaceProps, 'name'>){
    // Verificar se o email existe
    const user = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    });

    if(!user) {
      throw new Error('Usuário ou senha incorretos!');
    }

    // Verificar se a senha esta correta
    const passwordMatch = await compare(password, user.password);
    if(!passwordMatch) {
      throw new Error('Usuário ou senha incorretos!');
    }

    // Gerar Token JWT
    const token = sign(
      {
        name: user.name,
        email: user.email
      },
      process.env.JWT_SECRET || '123',
      {
        subject: user.id,
        expiresIn: '30d',
      }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token
    };
  }
}
