// import multer from 'multer';
import { Router } from 'express';
import { Segments, Joi, celebrate } from 'celebrate';
// import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UsersController from '@modules/users/infra/http/controllers/UsersController';

const usersController = new UsersController();


const usersRouter = Router();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().trim().min(8).max(100).email().required(),
      name: Joi.string().trim().min(3).max(20).required(),
      // user_type: Joi.string().trim().uuid().required(),
      user_type: Joi.string().trim().min(3).max(30).required(),
      password: Joi.string().trim().min(3).max(80).required(),
      phone: Joi.string().trim().min(3).max(50).required(),
      adress: Joi.string().trim().min(3).max(50).required(),
    },
  }),
  usersController.create,
);

export default usersRouter;
