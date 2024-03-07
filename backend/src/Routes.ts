import { Router } from 'express';
import multer from 'multer';
import {
  CreateUserController,
  AuthUserController,
  DatailUserController,
  CreateCategoryController,
  ListCategoryController,
  CreateProductController,
  ListByCategoryController,
  CreateOrderController,
  RemoveOrderController,
  AddItemController,
  RemoveItemController,
  SendOrderController,
  ListOrderController,
  DatailOrderController,
  FinishOrderController
} from './controllers';
import { IsAuth } from './middleware';
import uploadConfig from './config/multer';

const router = Router();
const upload = multer(uploadConfig.upload('./tmp'));

// User Routes
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', IsAuth, new DatailUserController().handle);

// Category Routes
router.post('/category', IsAuth, new CreateCategoryController().handle);
router.get('/category', IsAuth, new ListCategoryController().handle);

// Product Routes
router.post('/product', IsAuth, upload.single('file'), new CreateProductController().handle);
router.get('/category/product', IsAuth, new ListByCategoryController().handle);

// Order Routes
router.post('/order', IsAuth, new CreateOrderController().handle);
router.delete('/order', IsAuth, new RemoveOrderController().handle);
router.post('/order/add', IsAuth, new AddItemController().handle);
router.delete('/order/remove', IsAuth, new RemoveItemController().handle);
router.put('/order/send', IsAuth, new SendOrderController().handle);
router.get('/order/list', IsAuth, new ListOrderController().handle);
router.get('/order/detail', IsAuth, new DatailOrderController().handle);
router.put('/order/finish', IsAuth, new FinishOrderController().handle);


export { router };
