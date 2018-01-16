import { Router } from 'express';
import itemController from './item.controller';
import userController from './user.controller';

const router = Router();
const API_VERSIONS = { V1: 'v1'};

router.use(`/${API_VERSIONS.V1}/item`, itemController);
router.use(`/${API_VERSIONS.V1}/user`, userController);

export default router;
