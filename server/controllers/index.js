import { Router } from 'express';
import itemController from './item.controller';
import userController from './user.controller';
import s3Controller from './s3.controller';

const router = Router();
const API_VERSIONS = { V1: 'v1'};

router.use(`/${API_VERSIONS.V1}/item`, itemController);
router.use(`/${API_VERSIONS.V1}/user`, userController);
router.use(`/${API_VERSIONS.V1}/s3`, s3Controller);

export default router;
