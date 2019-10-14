import { Router } from 'express';


const router = Router();

router.get('/health-check', (req, res) => {
  return res.send('OK');
});

export default router;
