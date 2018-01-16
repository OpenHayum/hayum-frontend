import { Router } from 'express';
import User from '../models/user';
import { badRequest, notFound } from '../errors';

const router = Router();

/**
 * /user
 * create user
 */
router.post('/', (req, res, next) => {
  const user = new User({
    ...req.body,
  });

  user
    .save()
    .then(() => {
      res.json({
        userId: user.id,
      });
    })
    .catch(() => {
      next(badRequest());
    });
});

/**
 * /user/{userId}
 */
router.get('/:id', (req, res, next) => {
  User.getUserById(req.params.id)
    .then(user => res.json({ ...user }))
    .catch(() => next(notFound('User Not Found')));
});

export default router;
