import { Router } from 'express';
const router = Router();
import {
  getAllusers,
  getuserById,
  createuser,
  deleteuser,
  addAssignment,
  removeAssignment,
} from '../../controllers/userController.js';

// /api/users
router.route('/').get(getAllusers).post(createuser);

// /api/users/:userId
router.route('/:userId').get(getuserById).delete(deleteuser);

// /api/users/:userId/assignments
router.route('/:userId/assignments').post(addAssignment);

// /api/users/:userId/assignments/:assignmentId
router.route('/:userId/assignments/:assignmentId').delete(removeAssignment);

export { router as userRouter} ;
