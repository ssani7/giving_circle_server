import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('hi');
});

export const UserRouter = router;
