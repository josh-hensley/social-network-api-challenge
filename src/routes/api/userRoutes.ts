import { Router } from 'express';
const router = Router();
import {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  addAssignment,
  removeAssignment,
} from '../../controllers/userController';

// /api/Users
router.route('/').get(getAllUsers).post(createUser);

// /api/Users/:userId
router.route('/:userId').get(getUserById).delete(deleteUser);

// /api/Users/:UserId/assignments
router.route('/:userId/assignments').post(addAssignment);

// /api/Users/:UserId/assignments/:assignmentId
router.route('/:userId/assignments/:assignmentId').delete(removeAssignment);

export { router as userRouter} ;
