import { Router } from 'express';

const router = Router();

router.get('/signup', (req, res) => {
  res.render('authenticate/signup.ejs', { error: false });
});

export default router;
