import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/index';

const routesList = [usersRouter];
const router = Router();

routesList.forEach(route => router.use('/', route));
export default router;
