import { Router } from 'express';

import UserController from './app/controllers/UserConroller';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ api: 'ok' });
});

routes.post('/users', UserController.store);

export default routes;
