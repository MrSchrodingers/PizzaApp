import { Request, Response } from 'express';
import { CreateProductService, IMenuRequestProps } from '../../services';


export class CreateProductController {
  async handle(req: Request, res: Response){

    const { name, price, description, category_id }: IMenuRequestProps = req.body;
    // eslint-disable-next-line prefer-const
    let banner: string = '';

    const createProductService = new CreateProductService();

    if ( !req.file ){
      throw new Error('Error to Upload File');
    } else {
      const { originalname, filename: banner } = req.file;

      const product = await createProductService.execute({
        name,
        price,
        description,
        banner,
        category_id
      });

      return res.json(product);
    }
  }
}
