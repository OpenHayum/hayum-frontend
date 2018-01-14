import { Router } from 'express';
import itemController from './item.controller';
import userController from './user.controller';

const router = Router();

router.use('/item', itemController);
router.use('/user', userController);

export default router;
