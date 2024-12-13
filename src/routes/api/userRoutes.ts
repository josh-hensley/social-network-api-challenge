import { Router } from 'express';
const router = Router();
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} from '../../controllers/userController.js';

// /api/Users
router.route('/')
  .get(getAllUsers)
  .post(createUser);

// /api/Users/:userId
router.route('/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// /api/Users/:userId/friends
router.route('/:userId/friends')
  .post(addFriend);

// /api/Users/:UserId/friends/:friendId
router.route('/:userId/friends/:friendId')
  .delete(removeFriend);

export { router as userRouter} ;
