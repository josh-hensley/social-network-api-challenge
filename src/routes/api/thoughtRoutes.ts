import { Router } from 'express';
const router = Router();
import {
  getAllthoughts,
  getthoughtById,
  createthought,
  updatethought,
  deletethought,
} from '../../controllers/thoughtController.js';

// /api/thoughts
router.route('/').get(getAllthoughts).post(createthought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getthoughtById)
  .put(updatethought)
  .delete(deletethought);

export { router as thoughtRouter };
